const path = require('path');

console.log(path.dirname('C:/Users/HIED-AIO/Desktop/node_management_system/PathModule/path.js'));

console.log(path.extname('C:/Users/HIED-AIO/Desktop/node_management_system/PathModule/path.js'));

console.log(path.basename('C:/Users/HIED-AIO/Desktop/node_management_system/PathModule/path.js'));

console.log(path.parse('C:/Users/HIED-AIO/Desktop/node_management_system/PathModule/path.js'));

const s = path.parse('C:/Users/HIED-AIO/Desktop/node_management_system/PathModule/path.js');
console.log(s.root);
