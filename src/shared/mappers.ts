export const mapStringToArray = (
  str: string | undefined,
): [number, number, number] | undefined => {
  if (!str) {
    return undefined;
  }

  return str.split(",").map((item) => parseFloat(item)) as [
    number,
    number,
    number,
  ];
};
