function getSortedArray(data, order = "asc", getValue) {
  const sortedArray = data.sort((a, b) => {
    const reverseOrder = order === "asc" ? 1 : -1;
    const valueA = getValue(a);
    const valueB = getValue(b);
    // handling string sort
    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB) * reverseOrder;
    }
    // dy default a number sort
    return (valueA - valueB) * reverseOrder;
  });
  return sortedArray;
}

export { getSortedArray };
