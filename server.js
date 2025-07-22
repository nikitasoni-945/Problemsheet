const express= require('express');
const app = express()
const PORT = 8000
app.get('/',(req,res)=>{
    res.send('Hello World')
})
// app.listen(3000)
app.listen(PORT, (req,res) => {
    console.log(`app listening on port : ${PORT}`)
})