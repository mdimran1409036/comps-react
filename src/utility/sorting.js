function getSortValue(object, key) {
  return object[key];
}

function getSortedArray(data, order = "asc", key) {
  const sortOrder = order;
  const sorted = data.sort((a, b) => {
    const reverseOrder = sortOrder === "asc" ? 1 : -1;
    const valueA = getSortValue(a, key);
    const valueB = getSortValue(b, key);
    // handling string sort
    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB) * reverseOrder;
    }
    // dy default a number sort
    return (valueA - valueB) * reverseOrder;
  });
  return sorted;
}

export { getSortedArray };
