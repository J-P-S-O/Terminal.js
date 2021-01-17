import colorize from "./.."
import * as tester from "./.."
console.log(colorize("Hello", "Red"))
for (var i in tester.colors){
    console.log(colorize("Hello colorful world", i))
}