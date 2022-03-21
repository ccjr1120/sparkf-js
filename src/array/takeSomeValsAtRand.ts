import { times } from 'lodash';

/**
 * v0.1:从一个数组里随机取一些值
 * @param arr 原数组
 * @param n 取值的数量
 * @param repeat 是否重复
 * @returns 某一个值
 */
function takeOneAtRandom(arr: [], n = 1, repeat = true) {
  if (n > arr.length && !repeat) {
    return null;
  }
  if (repeat) {
    return times(n, () => arr[Math.floor(Math.random() * arr.length)]);
  }
  return times(n).map(() => {
    const r = Math.floor(Math.random() * arr.length);
    return arr.splice(r, 1);
  });
}

export default takeOneAtRandom;
