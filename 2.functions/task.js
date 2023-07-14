function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  arr.forEach(element => {
    if (element >= max) {
      max = element;
    };
    if (element <= min) {
      min = element;
    };
    sum += element;
  });
  sum = sum / arr.length;
  avg = +(sum.toFixed(2));
  return { min: min, max: max, avg: avg };
};

function summElementsWorker(...arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  
  arr.forEach(element => {
    if (element >= max) {
      max = element;
    };
    if (element <= min) {
      min = element;
    };
  });
  
  difference = max - min;
  if (!arr.length) {
    difference = 0;
  };
  return difference;
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  arr.forEach(element => {
    if (element % 2) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  });
  difference = sumOddElement - sumEvenElement;
  return difference;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  arr.forEach(element => {
    if (element % 2 == 0) {
      sumEvenElement += element;
      countEvenElement++;
    };
  });
  let sum = sumEvenElement / countEvenElement;
  if (!arr.length) {
    sum = 0;
  };
  return sum;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach(element => {
    const resultFunction = func(...element);
    if (resultFunction >= maxWorkerResult) {
      maxWorkerResult = resultFunction;
    }
  });
  return maxWorkerResult;
}
