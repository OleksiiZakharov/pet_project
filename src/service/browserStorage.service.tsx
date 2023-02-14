const prefix = 'marketplace';

export const browserStorage = {
  get(key: string): string {
    const value = localStorage.getItem(prefix + key);
    return value === null ? '' : String(value);
  },
  set(key: string, value: any) {
    if (typeof value !== 'string') {
      localStorage.setItem(prefix + key, JSON.stringify(value));
    } else {
      localStorage.setItem(prefix + key, value);
    }
  },
  delete(key: string) {
    localStorage.removeItem(prefix + key);
  },
  clear() {
    localStorage.clear();
  },
};
