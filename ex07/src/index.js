function main(numOne,numTwo){
    // Only change code below this line
    var numOne1 = parseInt(numOne);
    var numTwo1 = parseInt(numTwo);
    var remainder = parseInt(numOne1%numTwo1);
    // Only change code above this line
    return remainder;
}


console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));

module.exports = main;
