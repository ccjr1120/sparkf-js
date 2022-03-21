/**
 * v0.1:将一个数字打散为相应数量的随机数相加之和
 * @param v 待打散的数字
 * @param n 打散的数量
 * @returns 数量为n，值相加为v的数组
 */
function breakNumberToArray (v: number, n: number) {
  const resultArr = [];
  for (let i = 0; i < n - 1; i++) {
    const t = Math.floor(Math.random() * v);
    resultArr.push(t);
    v -= t;
  }
  resultArr.push(v);
  return resultArr;
}

export default breakNumberToArray;
