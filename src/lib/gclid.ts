const STORAGE_KEY = 'ssb_gclid';
const MAX_AGE_DAYS = 90;
const CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid'] as const;

interface StoredClickData {
  value: string;
  landingUrl: string;
  ts: number;
}

function getCurrentPageUrl(): string {
  if (typeof window === 'undefined') return '';
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}`;
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

function readStoredClickData(): StoredClickData | undefined {
  if (typeof window === 'undefined') return undefined;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const record = JSON.parse(raw) as StoredClickData;
    const ageDays = (Date.now() - record.ts) / (1000 * 60 * 60 * 24);
    if (ageDays > MAX_AGE_DAYS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }
    return record;
  } catch {
    return undefined;
  }
}

export function captureGclid(): void {
  if (typeof window === 'undefined') return;
  try {
    const fromUrl = readFromUrl();
    if (fromUrl) {
      const record: StoredClickData = {
        value: fromUrl,
        landingUrl: getCurrentPageUrl(),
        ts: Date.now(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    }
  } catch {
  }
}

export function getGclid(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  const fromUrl = readFromUrl();
  if (fromUrl) return fromUrl;

  return readStoredClickData()?.value;
}

export function getLandingUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  if (readFromUrl()) return getCurrentPageUrl();

  return readStoredClickData()?.landingUrl;
}
