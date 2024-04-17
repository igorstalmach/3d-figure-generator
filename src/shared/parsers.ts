export const findAndParseSize = (input: string[]): string | undefined => {
  const item = input.find((line) => line.includes("size"));

  if (!item) {
    return undefined;
  }

  return item.slice(4).slice(0, -1);
};

export const findAndParseRadius = (input: string[]): string | undefined => {
    const item = input.find((line) => line.includes("radius"));

    if (!item) {
        return undefined;
    }

    return item.slice(6).slice(0, -1);
};

export const findAndParsePosition = (input: string[]): string | undefined => {
  const item = input.find((line) => line.includes("position"));

  if (!item) {
    return undefined;
  }

  return item.slice(8).slice(0, -1);
};

export const findAndParseColor = (input: string[]): string | undefined => {
  const item = input.find((line) => line.includes("color"));

  if (!item) {
    return undefined;
  }

  return item.slice(5).slice(0, -1);
};

export const findAndParseRotation = (input: string[]): string | undefined => {
  const item = input.find((line) => line.includes("rotation"));

  if (!item) {
    return undefined;
  }

  return item.slice(8).slice(0, -1);
};


