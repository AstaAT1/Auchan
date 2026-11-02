const fs = require("fs");

let count = 0;
const max = 5 * 60 * 60;

const timer = setInterval(function () {
    fs.appendFileSync("products.js", "console.log('hello world');\n");

    count++;

    if (count >= max) {
        clearInterval(timer);
        console.log("Finished!");
    }
}, 1000);
