// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  return Math.abs(pickUpLocation - 42);
}

function distanceFromHqInFeet(someValue) {
  return 264 * distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    let price = (distance * 0.02 - 8).toFixed(2);
    return parseFloat(price);
  } else if (distance < 2500) {
    return 25;
  }
  return "cannot travel that far";
}
