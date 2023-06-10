const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const hbs = require("hbs");

// realtive absolute
// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engine
app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// builtin middleware
app.use(express.static(staticPath));

// template engine route
app.get("/",(req,res)=>{
     res.render("index", {
          channelName: "Muneeba",
     });
})
app.get("/about",(req,res)=>{
     res.render('about',{
          name: req.query.name,
          aname: req.query.aname
     });
})

// API
// get - Read 
// post - create 
// put - update 
// delete - delet 

app.get("/about/*", (req,res)=>{
     res.render("404" , {
          errorcomment: "Opps this about us page couldn't be found",
     });
})
app.get("*", (req,res)=>{
     res.render("404" , {
          errorcomment: "Opps page couldn't be found",
     });
})


app.listen(port, ()=>{
    console.log(`listening the port at ${port}`);
})

// The callback function has 2 parameters, request and response
// The request(req) object represents the HTTP request and 
// has properties for the request query string, parameter, body,
// HTTP headers, etc

// Similarly, the response object represents the HTTP response
// that the express app sends when it receives an HTTP request

