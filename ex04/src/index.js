function main(){
    
    // Only change code below this line
    var  myDecimal = 8.2;
    var num =  0.00254
    var myDecimalE = num.toExponential();
    // Only change code above this line
    return {
        myDecimal,
        myDecimalE
    };
}


console.log(main());
module.exports = main;