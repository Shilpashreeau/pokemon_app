const express=require("express");
const app=express();
const PORT=3000;
const pokemon=require("./models/pokemon");


/**
 * GET route /
 */
app.get("/",(req,res)=>{
    res.send('Welcome to the Pokemon App!');

})

/**
 * GET /pokemon
 */
app.get("/pokemon",(req,res)=>{

    res.send(pokemon);
})






app.listen(PORT,()=>{

console.log(`Server is running at port ${PORT}`);

})