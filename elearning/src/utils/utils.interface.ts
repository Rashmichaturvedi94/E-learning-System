export interface Storage<T> {
  setItem: (key: string, value: T) => Promise<void | { error?: any }>;
  getItem: (key: string) => Promise<T | null | { error?: any }>;
  removeItem: (key: string) => Promise<void | { error?: any }>;
}
