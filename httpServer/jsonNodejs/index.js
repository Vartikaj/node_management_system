const fs = require("fs");

const bioData = {
    name : "vartika",
    dbo : "28-01-1998",
    email : "vartikajohari57@gmail.com",
}

const jsonObj = JSON.stringify(bioData);

fs.writeFile("create.json", jsonObj, (err) => {
    console.log("Done");
});

//READ FILE PROVIDE BUFFER DATA TO CONVERT THAT BUFFER DATA INTO ORIGINAL STRING THEN WE USE TYPE CONVERSION WITH UTF-8
fs.readFile("create.json", "utf-8", (err, data) => {
    console.log(JSON.parse(data));
});

