"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("./..");
var tester = require("./..");
console.log(__1.default("Hello", "Red"));
for (var i in tester.colors) {
    console.log(__1.default("Hello colorful world", i));
}
