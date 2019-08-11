/* eslint-disable @typescript-eslint/explicit-function-return-type */
// const splitNames = mathMethods;
export default (firstName: string, secondName: string) => {
  const obj = {
    firstName,
    secondName,
    coupleNames: [firstName + secondName].filter((item: string) => item !== ''),
  };
  const createName = (
    first: string,
    second: string,
    mathMethod: ((s: string, radix?: number | undefined) => number) | ((x: number) => number),
  ) => {
    const firstNameLength = mathMethod(firstName.length / 2);
    const secondNameLength = mathMethod(secondName.length / 2);
    const firstHalf = first.substring(0, firstNameLength);
    const secondHalf = second.substring(secondNameLength, secondName.length);
    const coupleName = `${firstHalf}${secondHalf}`;
    return coupleName;
  };
  function ship(first: string, second: string) {
    // Declare an array to hold all the shipnames generated
    const coupleNames: string[] = [];
    const mathMethods = [parseInt, Math.floor, Math.ceil]; // Different math methods are used to create slightly different ship names
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(first, second, mathMethod)); // first concatenate the names in the order they were entered
    });
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(first, second, mathMethod)); // Then cocatenate them the other way around
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
