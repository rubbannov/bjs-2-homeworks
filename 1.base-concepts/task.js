"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant === 0) {
    arr.push(- b / (2 * a));
  } else if (discriminant > 0) {
    arr.push(Math.round((-b + Math.sqrt(b) ) / (2 * a)));
    arr.push(Math.round((-b - Math.sqrt(b) ) / (2 * a)));
  } else {
    return arr;
  };
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent / 100) / 12;
  let bodyCredit = amount - contribution;
  let paymentInMonth = bodyCredit * (percent + (percent / (((1 + percent) **countMonths) - 1)));
  let amountCredit = paymentInMonth * countMonths;
  return (+ amountCredit.toFixed(2));
};