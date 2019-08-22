/* eslint-disable @typescript-eslint/explicit-function-return-type */
// const splitNames = mathMethods;
// eslint-disable-next-line @typescript-eslint/class-name-casing

export default (firstName: string, secondName: string) => {
  const obj = {
    firstName,
    secondName,
    coupleNames: [firstName + secondName], // .filter((item: string) => item !== ''),
  };

  const createName = (
    first: string,
    second: string,
    mathMethod: {
      (x: number): number;
      (x: number): number;
      (arg0: number): void;
      (arg0: number): void;
    },
  ) => {
    const firstNameLength = mathMethod(first.length / 2);
    const secondNameLength = mathMethod(second.length / 2);
    const firstHalf = first.substring(0, firstNameLength);
    const secondHalf = second.substring(secondNameLength, second.length);
    const coupleName = firstHalf + secondHalf;
    return coupleName;
  };
  function ship(first: string, second: string) {
    // Declare an array to hold all the shipnames generated
    const coupleNames: string[] = [];
    const mathMethods = [Math.floor, Math.ceil, Math.trunc]; // Different math methods are used to create slightly different ship names
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(first, second, mathMethod)); // first concatenate the names in the order they were entered
    });
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(second, first, mathMethod)); // Then cocatenate them the other way around
    });
    const filtered = [...new Set(coupleNames)];
    obj.coupleNames = filtered;
  }

  const firstSplit = firstName.split(' ');
  const secondSplit = secondName.split(' ');
  firstSplit.forEach((str: string) => {
    secondSplit.forEach((name: string) => ship(str, name));
  });
  return obj;
};
