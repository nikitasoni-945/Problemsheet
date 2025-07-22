//for create file
const fs = require('fs');
fs.open("Demo2.txt",'w',function(err){
    if(err)throw err;
    console.log("File Created Demo2");
}) 