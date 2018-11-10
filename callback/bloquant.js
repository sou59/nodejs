// import require module
const fs = require("fs");

// asynchrone read
console.log(`-->Debut execution Asynchrone`);
let data = fs.readFileSync('index.txt');
console.log(`Synchronous read: ${data.toString()}`);
console.log(`-->Fin Execution Asynchrone`);

// temps de traitement plus long

