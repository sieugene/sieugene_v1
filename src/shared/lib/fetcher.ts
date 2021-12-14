export function getFetcher<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json());
}
