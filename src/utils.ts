export function sanitize(url: string | undefined): string | undefined {
  if (typeof url === 'string') {
    return url.replace(/&/g, '&amp;');
  }
  return;
}
