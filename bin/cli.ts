#! usr/bin/node
// this file is the one you run through the cli
import colorize from "./.."
import * as cli from "./.."
// @ts-ignore
if (process.argv[0] == "node"){
    console.error("This shall be used from bin ")
    // @ts-ignore
    process.exit(1)
}
//@ts-ignore 
let color = process.argv[1]
// @ts-ignore 
console.log(colorize(process.argv.slice(2).join(""), color))
