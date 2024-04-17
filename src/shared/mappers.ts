export const mapStringToArray = (
  str: string | undefined,
): [number, number, number] | undefined => {
  if (!str) {
    return undefined;
  }

  if (!str.includes("/")) {
    return [parseFloat(str), parseFloat(str), parseFloat(str)];
  }

  return str.split("/").map((item) => parseFloat(item)) as [
    number,
    number,
    number,
  ];
};
