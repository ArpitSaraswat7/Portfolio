import { NextResponse } from "next/server";
import {
  getGuestbookEntries,
  addGuestbookEntry,
  likeGuestbookEntry,
  isRateLimited,
} from "@/lib/guestbook";

export async function GET() {
  try {
    const entries = await getGuestbookEntries();
    return NextResponse.json({ entries });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to fetch entries" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "guest";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages posted. Please wait a minute." },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    const { name, handle, message, avatar } = body || {};
    const entry = await addGuestbookEntry({ name, handle, message, avatar });
    return NextResponse.json({ success: true, entry });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to post entry" }, { status: 400 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Entry ID is required" }, { status: 400 });
    }
    const success = await likeGuestbookEntry(id);
    return NextResponse.json({ success });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to update like" }, { status: 500 });
  }
}
