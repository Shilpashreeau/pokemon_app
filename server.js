const express=require("express");
const app=express();
const PORT=3000;


/**
 * GET route /
 */
app.get("/",(req,res)=>{
    res.send('Welcome to the Pokemon App!');

})






app.listen(PORT,()=>{

console.log(`Server is running at port ${PORT}`);

})