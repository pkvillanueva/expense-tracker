export const getLocalStorageItem = (key) => {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return undefined;
    return JSON.parse(stored);
  } catch (err) {
    return undefined;
  }
};

export const saveLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};
