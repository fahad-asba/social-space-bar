const STORAGE_KEY = 'ssb_gclid';
const MAX_AGE_DAYS = 90;
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;

interface StoredGclid {
  value: string;
  ts: number;
}

function readFromUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  const params = new URLSearchParams(window.location.search);
  for (const key of CLICK_ID_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) return value;
  }
  return undefined;
}

export function captureGclid(): void {
  if (typeof window === 'undefined') return;
  try {
    const fromUrl = readFromUrl();
    if (fromUrl) {
      const record: StoredGclid = { value: fromUrl, ts: Date.now() };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    }
  } catch {
  }
}

export function getGclid(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  const fromUrl = readFromUrl();
  if (fromUrl) return fromUrl;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const record = JSON.parse(raw) as StoredGclid;
    const ageDays = (Date.now() - record.ts) / (1000 * 60 * 60 * 24);
    if (ageDays > MAX_AGE_DAYS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }
    return record.value;
  } catch {
    return undefined;
  }
}
