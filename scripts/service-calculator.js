console.log("Type help() for available options.");

function help() {
  console.log("Commands:")
  console.log("findCharge(gePrice, itemAmount)");
  console.log("myTurnout(gePrice, itemAmount)");
}

function findCharge(price, amount) {
  let result = price;
  let offRate = undefined;
  let workerPayment = undefined;
  offRate = result * .55;
  result -= offRate;
  result *= amount;
  workerPayment = result * .46;
  result += workerPayment;
  return (result);
}

function myTurnout(price, amount) {
  let result = price;
  let offRate = undefined;
  let workerPayment = undefined;
  offRate = result * .55;
  result -= offRate;
  result *= amount;
  workerPayment = result * .46;
  result = workerPayment;
  return (result);
}
