/**
 * v0.1:从一个数组里随机取一个值
 * @param arr 原数组
 * @returns 某一个值
 */
function takeOneAtRandom (arr: []) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default takeOneAtRandom;
