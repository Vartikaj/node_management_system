//fs : for files module
const fs = require("fs");
const os = require("os");

//creating a file and data into the file. If the file is exisits then replace its value
// fs.writeFileSync("create.js", "This dummy content");
// fs.writeFileSync("create.js", "This is a real text");

//this is append more data in the given file
// fs.appendFileSync("create.js", "This is for append");

//buffer is the datatype used in node.js not in javascript
//BUFFER : is used to store binary data
//while reading from a file or receiving packets over the network...
// const buf_Data = fs.readFileSync("create.js");
// org_data = buf_Data.toString();
// console.log(org_data);

// fs.appendFileSync("Thapa.js");
// fs.mkdirSync("ThapaTechnical");
// fs.writeFileSync("ThapaTechnical/bio.txt", "This is the file");
// fs.appendFile("ThapaTechnical/bio.txt", "This is the append data", () => {
// });

// fs.appendFile("ThapaTechnical/bio.txt", "This is newly added data", (err) => {
//     console.log('data')
// });

// fs.readFile("ThapaTechnical/bio.txt", "utf-8", (err) => {
//     console.log('data read');
// })

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

const freeMenory = os.freemem();
console.log(`${freeMenory / 1024 / 1024 / 1024}`);
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());