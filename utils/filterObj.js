export const filterObj = (object, valueFilterKey) => {
  return Object.keys(object)
    .filter((key) => key.includes(valueFilterKey))
    .reduce((res, key) => {
      return Object.assign(res, { [key]: object[key] });
    }, {});
};
