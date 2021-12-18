export function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return dd + "." + mm + "." + yyyy;
}

export function getRandomNumber(from = 0, to = 10000000) {
  return Math.random() * (to - from) + from;
}
