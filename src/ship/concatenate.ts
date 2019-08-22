export const createName = (
  first: string,
  second: string,
  mathMethod: {
    (x: number): number;
    (x: number): number;
    (arg0: number): void;
    (arg0: number): void;
  },
) => {
  const firstNameLength = mathMethod(firstName.length / 2);
  const secondNameLength = mathMethod(secondName.length / 2);
  const firstHalf = first.substring(0, firstNameLength);
  const secondHalf = second.substring(secondNameLength, secondName.length);
return const coupleName: string = (firstHalf + secondHalf) as string;
};
