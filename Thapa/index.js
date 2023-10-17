const fs = require("fs");

// fs.writeFileSync("bio.txt", "Hello Country")
// fs.appendFileSync("bio.txt", ". content");
//
// const buf_Data = fs.readFileSync("bio.txt", "utf8");
// console.log(buf_Data);

// fs.renameSync("bio.txt", "mybio.txt");
// fs.rmdirSync("mybio.txt");

fs.readFile("mybio.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("after the data");