/**
 * Guestbook Service Abstraction
 * Handles persistence, sanitization, rate-limiting, and validation.
 */

export interface GuestbookEntry {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  message: string;
  createdAt: string;
  likes: number;
}

// In-memory store for runtime fallback (starts empty - no fake seed content)
let inMemoryEntries: GuestbookEntry[] = [];

// Rate limiting map: IP or identifier -> timestamp array
const rateLimitMap = new Map<string, number[]>();

export function isRateLimited(identifier: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(identifier) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= limit) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(identifier, validTimestamps);
  return false;
}

export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, "") // basic tag stripping
    .trim();
}

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  // If Supabase or external DB env vars are configured in future, query here:
  // e.g. if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) { ... }
  return inMemoryEntries;
}

export async function addGuestbookEntry(data: {
  name?: string;
  handle?: string;
  message: string;
  avatar?: string;
}): Promise<GuestbookEntry> {
  const cleanMessage = sanitizeText(data.message);
  if (!cleanMessage || cleanMessage.length < 2) {
    throw new Error("Message must be at least 2 characters long.");
  }
  if (cleanMessage.length > 500) {
    throw new Error("Message cannot exceed 500 characters.");
  }

  const cleanName = data.name ? sanitizeText(data.name).slice(0, 50) : "Guest Visitor";
  let cleanHandle = data.handle ? sanitizeText(data.handle).slice(0, 30) : "@visitor";
  if (!cleanHandle.startsWith("@")) {
    cleanHandle = `@${cleanHandle}`;
  }

  const newEntry: GuestbookEntry = {
    id: `entry_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: cleanName || "Guest Visitor",
    handle: cleanHandle,
    avatar: data.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
    message: cleanMessage,
    createdAt: new Date().toISOString(),
    likes: 0,
  };

  inMemoryEntries = [newEntry, ...inMemoryEntries];
  return newEntry;
}

export async function likeGuestbookEntry(id: string): Promise<boolean> {
  const entry = inMemoryEntries.find((e) => e.id === id);
  if (entry) {
    entry.likes += 1;
    return true;
  }
  return false;
}
