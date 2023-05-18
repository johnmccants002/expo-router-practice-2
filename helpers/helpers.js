export function convertToPath(arr) {
  const filteredArr = arr.filter((item) => !item.startsWith("("));
  filteredArr.pop();
  const path = filteredArr.join("/");
  return `/${path}`;
}
