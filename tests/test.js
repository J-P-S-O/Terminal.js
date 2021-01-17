
import colorizer from "./..";
import * as tester  from "./..";
console.log(colorizer("Hello", "Red"));
for (var i in tester.colors) {
    console.log(colorizer("Hello colorful world", i));
}
