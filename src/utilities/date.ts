export function parseDate(str: number) {
  // Slice last charac to remove year
  const date = new Date(str * 1000).toDateString().slice(0, -4);

  return date;
}
