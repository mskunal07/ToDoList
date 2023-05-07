const express = require("express");
const bodyParcer = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParcer.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Buy Food","Cook Food","Eat Food"];
let workitems = [];

app.get("/",function(req,res){
      
    let day = date.getDate();
    res.render("list",{ListTitle : day,itemsToAdd : items});
});

app.post("/",(req,res)=>{
    var item = req.body.newitem;

    if(req.body.submit == "Work List"){
        workitems.push(item);   
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");  // used  redirect instead of render because by using render it creates problem 
                            // while rendering the app.get's render function that newitem not defined 
    }
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/work",(req,res)=>{
    res.render("list",{ListTitle:"Work List" , itemsToAdd:workitems});
});



app.listen(3000,()=>{
    console.log("server listening  on port 3000");
});
 