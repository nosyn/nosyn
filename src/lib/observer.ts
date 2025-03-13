type SortCallback = (array: number[], stepIndex: number) => void;

let i = 0;
export const createObservableArray = (
  arr: number[],
  callback: SortCallback
): number[] => {
  return new Proxy(arr, {
    set(target, property, value) {
      const propertyValue = Number(property);

      if (isNaN(propertyValue)) {
        console.error('Invalid property. Must be a number:', property);
        return false;
      }

      console.log('value: ', i);
      i++;

      target[propertyValue] = value;
      callback([...target], propertyValue); // Clone to avoid mutation issues

      return true;
    },
  });
};
