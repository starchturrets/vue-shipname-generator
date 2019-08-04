/* eslint-disable camelcase */
export default (first = '', second = '') => {
  const obj = {
    firstNames: '',
    secondNames: '',
    shipNames: [],
  };
  obj.firstNames = first;
  obj.secondNames = second;

  // Helper function
  const createName = (firstName, secondName, mathMethod) => {
    const firstNameLength = mathMethod(firstName.length / 2);
    const secondNameLength = mathMethod(secondName.length / 2);
    const firstHalf = firstName.substring(0, firstNameLength);
    const secondHalf = secondName.substring(secondNameLength, secondName.length);
    const coupleName = firstHalf + secondHalf;
    return coupleName;
    // End Helper function
  };
  const ship = (name1, name2) => {
    const coupleNames = [];
    // Declare an array to hold all the shipnames generated

    const mathMethods = [Math.floor, Math.ceil, parseInt]; // Different math methods are used to create slightly different ship names
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(name1, name2, mathMethod)); // first concatenate the names in the order they were entered
    });
    mathMethods.forEach(mathMethod => {
      coupleNames.push(createName(name2, name1, mathMethod)); // Then cocatenate them the other way around
    });
    obj.shipNames = [...new Set(coupleNames)]; // remove duplicate items from the couple names array
    // debugger;
  };
  const firstSplit = first.split(' ');
  const secondSplit = second.split(' ');
  firstSplit.forEach(first_name => {
    secondSplit.forEach(second_name => ship(second_name, first_name));
  });

  return obj;
};
