// import require module
const fs = require("fs");

// asynchrone read
console.log(`-->Debut execution Asynchrone`);
fs.readFile('index.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(`Asynchronous read: ${data.toString()}`);
    console.log('-->Fin Execution Asynchrone');
});
