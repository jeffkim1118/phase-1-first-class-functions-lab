const returnFirstTwoDrivers = (drivers) => {
    const newArray = drivers.slice(0,2);
    return newArray;
}

const returnLastTwoDrivers = (drivers) => {
    const newArray = drivers.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => {
    return function fareMultiplier(fare){
        return fare * value;
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}