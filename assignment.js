// .......................seerToMon......................\\
function seerToMon(seers) {
    // error throw
    if(typeof (seers)!= 'number'){
        return "Please enter a valid number!";
    } else if (seers < 0) {
        return "Please enter a positive valid number!";
    }
    // main task
    let mon = seers / 40;
    return mon;
}
let mySeers = 200;
let mon = seerToMon(mySeers);
console.log(mon);

// ...................totalSales....................\\
function totalSales(shirtMeasure, pantMeasure, shoeMeasure) {
    // error throw
    if(typeof(shirtMeasure, pantMeasure, shoeMeasure)!= 'number'){
                return "Please enter a valid number.";
            } else if (shirtMeasure, pantMeasure, shoeMeasure < 0) {
                return "Please enter a positive valid number";
        }
    // main task
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    //  calculate
    const shirtPriceMeasurement = shirtMeasure * perShirtPrice;
    const pantPriceMeasurement = pantMeasure * perPantPrice;
    const shoePriceMeasurement = shoeMeasure * perShoePrice;

    const totalPrice = shirtPriceMeasurement + pantPriceMeasurement + shoePriceMeasurement;
    return totalPrice;
}
const totalamount = totalSales(2, 3, 5);
console.log(totalamount);


// .......................deliveryCost........................\\
function deliveryCost(pieces) {
    // error throw
    if(typeof(pieces)!= 'number'){
        return "Please give a valid number!";
    } else if(pieces < 0) {
        return "Please give a positive valid number!";
    }
     // main task
    const tShirtFirstMeasurement = 100;
    const tShirtSecondMeasurement = 80;
    const tShirtThirdMeasurement = 50;
    if (pieces <= 100) {
        const price = pieces * tShirtFirstMeasurement;
        return price;
    }
    else if (pieces <= 200) {
        const firstExposure = 100 * tShirtFirstMeasurement;
        const nextPieces = pieces - 100;
        const secondExposure = nextPieces * tShirtSecondMeasurement;
        const price = firstExposure + secondExposure;
        return price;

    }
    else {
        const firstExposure = 100 * tShirtFirstMeasurement;
        const secondExposure = 100 * tShirtSecondMeasurement;
        const nextPieces = pieces - 200;
        const prices = nextPieces * tShirtThirdMeasurement;
        const totalPrices = firstExposure + secondExposure + prices;
        return totalPrices;
    }
}
const cost = deliveryCost(101);
console.log(cost);

//........................ perfectFriend.....................\\

function perfectFriend(friends) {
    // main task
    for (let i = 0; i < friends.length; i++){
        var element = friends[i];
        // error throw
        if (friends[i].length == 5) {
            return element;
        }
        else if(typeof (friends[i]) != 'string'){
            return "Please enter a valid name!";}
    }
}
const friendsName =['Rahima', 'Karima','Romim','Sariful', 'Hridoy', 'Nirob'];
const friend = perfectFriend(friendsName);
console.log(friend);
