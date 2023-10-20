const { EventEmitter } = require("events");

const event = new EventEmitter();

// event.on('saveMyName', () => {
//     console.log("your name is vinod");
// });
// event.on('saveMyName', () => {
//     console.log("your name is bahadu")
// })
// event.emit('saveMyName');

event.on('checkPage', (status, msg) => {
    console.log(`status code is ${status}, and your page is ${msg}`)
});
//here we also apply some parameters
event.emit('checkPage', 200, "ok");