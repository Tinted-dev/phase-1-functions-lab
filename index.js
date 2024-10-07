// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42
    return Math.abs(pickUpLocation - hqLocation)
}
function distanceFromHqInFeet(pickUpLocation) {
    const distanceInFeet = distanceFromHqInBlocks(pickUpLocation)
    return distanceInFeet * 264
}
function distanceTravelledInFeet(start, destination) {
    const distanceTravelledInFeet = Math.abs(destination - start)
    return distanceTravelledInFeet * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    } else if(distance > 400 && distance <= 2000) {
        return(distance - 400) * 0.02
    } else if(distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}