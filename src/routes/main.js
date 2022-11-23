const express= require("express");
const async = require("hbs/lib/async");
const routes=express.Router();
const Contact=require("../models/Contact")
const Detail=require("../models/Detail");
const Slider = require("../models/Slider");
const Service=require("../models/Service")

routes.get("/", async (req,res)=>{
    const details= await Detail.findOne({"_id":"63765af987f38dcabea45992"})
    const slides= await Slider.find()
    // console.log(details)

   const services=await Service.find() 
    
res.render("index",{
    details:details,
    slides:slides,
    services:services
});   
});


routes.get("/gallery", async (req,res)=>{
    const details= await Detail.findOne({"_id":"63765af987f38dcabea45992"})
    res.render("gallery",{
        details:details
    })
});

// process contact form
routes.post("/process-contact-form", async(req,res)=>{
    console.log("Form has Submitted")
    console.log(req.body)
   //save to data in db 

   try {

        const data=await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    
   } catch (e)
    {
        console.log(e)
        res.redirect("/")
    
   }

})

module.exports= routes;