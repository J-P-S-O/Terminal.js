let { colorize } = require("./..")




var color = process.argv[0] == "node" ? process.argv[2] : process.argv[1];

console.log(colorize(process.argv.slice(2).join(""), color));
