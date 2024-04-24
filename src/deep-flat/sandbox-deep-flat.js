import { deepFlat } from './deep-flat.js';

const arr = [
  [1, 2],
  [4, [8, 9]],
];
const result = deepFlat(arr);
console.log(result);
