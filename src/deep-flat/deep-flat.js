/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]); // -> [1, 2, 3, 4, 5]
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]); // -> ['a', 'b', 'c', 'd', 'e']
 *
 */

export const deepFlat = (arr) => {
  const result = arr.flat(Infinity);
  return result;
};
