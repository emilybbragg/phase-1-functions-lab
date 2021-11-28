// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks*264
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(destination - start)) * 264
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination)
    // 1. first 400 ft are free
    if (distance <= 400){
        return 0
    // 2. 400 - 2000: $.02
    } else if (distance > 400 && distance < 2000){
        const chargedDistance = distance - 400
        return chargedDistance * .02
    // 3. 2000 - 2500: $25 flat    
    } else if (distance >= 2000 && distance < 2500){
        return 25
    // 4. >2500: not allowed : "cannot travel that far"
    } else if (distance >= 2500){
        return "cannot travel that far"
    }
  }

// const distancefromHqInBlocks = function(someValue) {
//     // do stuff
// }
// distanceFromHqInBlocks(50)

// const distanceFromHqInBlocks = (someValue) => {
  
// } 
// distanceFromHqInBlocks(50)