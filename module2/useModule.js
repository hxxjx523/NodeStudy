// const moduleA = require("./module/moduleA");
const { text_odd, text_even } = require("./moduleText");

function checkStringOddOrEven(str){
    if(str.length % 2){
        return text_odd;
    }
    return text_even;
}


console.log("3 : ", checkStringOddOrEven("33"));
console.log("4 : ", checkStringOddOrEven("2eewqee"));

module.exprots = [checkStringOddOrEven, text_even, text_odd];
