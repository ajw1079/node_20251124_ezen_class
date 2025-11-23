const {odd, even} = require("./02_var");

function chkStringOddOrEven(str){
    if(str.length % 2 == 0){
        return even;
    }
    return odd;
}
module.exports = chkStringOddOrEven;