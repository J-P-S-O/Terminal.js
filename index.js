exports.in = function(){

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(">" , function(res) {
    return res;
    
});
rl.on("close", function() {
    return undefined;
})

}
