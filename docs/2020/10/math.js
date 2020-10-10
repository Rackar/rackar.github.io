//直线方程和距离计算平行两条直线方程
function moveLineWithDistance(
  lineParam = {
    x: 0,
    y: 0,
    k: 1,
  },
  dis = 1
) {
  let { x, y, k } = lineParam;

  let t1 = Math.pow(dis, 2) / (Math.pow(k, 2) + 1);
  let t2 = Math.sqrt(Math.abs(t1));
  let y1 = y + t2;
  let y2 = y - t2;
  let x1 = x + y * k - y1 * k;
  let x2 = x + y * k - y2 * k;
  //   let newk = -1 / k;
  let res = [
    { x: x1, y: y1, k },
    { x: x2, y: y2, k },
  ];
  console.log(res);
  return res;
}

// moveLineWithDistance({ x: 0, y: 0, k: 2 }, 1.7);

moveAllLine();

///根据距离和条数计算所有平行线方程
function moveAllLine(
  lineParam = {
    x: 0,
    y: 0,
    k: 1,
  },
  dis = 1.414,
  leftTime = 2,
  rightTime = 3
) {
  let arrResult = [lineParam],
    leftTemp = { ...lineParam },
    rightTemp = { ...lineParam };
  for (let index = 0; index < leftTime; index++) {
    leftTemp = moveLineWithDistance(leftTemp, dis)[0];
    arrResult.push(leftTemp);
  }
  for (let index = 0; index < rightTime; index++) {
    rightTemp = moveLineWithDistance(rightTemp, dis)[1];
    arrResult.push(rightTemp);
  }
  console.log("------\n", arrResult);
}
