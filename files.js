
//for read the file
const fs= require('fs');
fs.readFile("Demo.txt",(err,data)=>{
    if(err){
        console.error("Error reading file:",err.message);
        return;
    }
    console.log(data.toString());
}) 
