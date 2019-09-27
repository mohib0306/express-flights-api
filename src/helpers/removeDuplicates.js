const removeDuplicate = (array, keys) => {
  if (!keys || !keys.length) {
    throw Error("No keys provided to compare the elements of array");
  }
  keys.forEach(key => {
    if (!array.every(element => element.hasOwnProperty(key))) {
      throw Error(
        "The provided keys are not available in all of the objects provided in the array"
      );
    }
  });
  const filtered = array.reduce((accumulator, element) => {
    if (!keys.every(key => accumulator.find(el => el[key] === element[key]))) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
  return filtered;
};

export default removeDuplicate;
