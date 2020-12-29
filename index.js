exports.in = function(query){
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(query || "" , function(res) {
    return res;
    
});

}
