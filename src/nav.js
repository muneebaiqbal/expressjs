const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.write("<h1>Welcome to my Home page</h1>");
    res.write("<h1>Welcome to my again Home page</h1>");
    res.send();
});
app.get("/about", (req,res)=>{
    res.status(200).send("Welcome to my About page");
});
app.get("/contact", (req,res)=>{
    res.send("Welcome to my ContactUS page");
});
app.get("/temp", (req,res)=>{
    res.send([
        {
        id: 1,
        name: "Muneeba",
    },
        {
        id: 1,
        name: "Muneeba",
    },
        {
        id: 1,
        name: "Muneeba",
    }
]);
});


// The method is identical when object or array is passed,
// but res.json() will also convert non-object,
// such as null and undefined, which are not valid JSON.

app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
})