
let { colorize } = require("./..")
let tester = require("./..")
console.log(colorize("Hello", "Red"));
for (var i in tester.colors) {
	for (var j in tester.colors){
    console.log(colorize("Hello colorful world", i+"."+j));
}
}
