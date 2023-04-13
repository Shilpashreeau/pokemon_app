const express=require("express");
const app=express();
const PORT=3000;
const pokemon=require("./models/pokemon");
//* Setting view template
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
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

    res.render("Index");
})






app.listen(PORT,()=>{

console.log(`Server is running at port ${PORT}`);

})