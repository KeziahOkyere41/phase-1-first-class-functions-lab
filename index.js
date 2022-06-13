// Code your solution in this file!
function returnFirstTwoDrivers(){
    const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
     return returnFirstTwoDrivers.slice(0,returnFirstTwoDrivers.length-2,-1);
}

function returnLastTwoDrivers(){
    const returnLastTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return returnLastTwoDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
   
    function createFareMultiplier(num){
        return function fareMultiplier(fare){
            return num * fare;
        }
    }

    const fareDoubler = function createFareMultiplier(fare){
        return fare * 2;
    }

    const fareTripler = function createFareMultiplier(fare){ selectDifferentDrivers
        return fare * 3;
    }

    function selectDifferentDrivers(drivers , selectingDrivers){
        if (selectingDrivers === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(drivers);
        }
        else{
            return returnLastTwoDrivers(drivers);
        }
    }