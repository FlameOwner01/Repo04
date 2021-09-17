function main(numOne,numTwo){
    // Only change code below this line
    var numOne;
    var numTwo;
    var numOne1 = parseFloat(numOne);
    var numTwo1 = parseFloat(numTwo);
    var myQuotient = parseFloat(numOne1/numTwo1);
    // Only change code above this line
    return myQuotient;
}


console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;