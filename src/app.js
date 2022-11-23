const express= require("express")
const hbs=require("hbs")
const app= express();
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Detail=require("./models/Detail")
const routes=require('./routes/main')
const Slider=require('./models/Slider')
const Service=require('./models/Service')

// /static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

// template engine
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

// db connection
mongoose.connect("mongodb://localhost/freelance_web",()=>{
    console.log("db conencted")

    // Service.create([
    //     {
    //         icon:'fa-brands fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'We provide courses  that help our students in learning and placement.',
    //         linkText:'Check',
    //         link:'https://www.google.com'
    //     },
    //     {
    //         icon:'fa-solid fa-rectangle-history-circle-plus',
    //         title:'Learn Project',
    //         description:'We provide courses  that help our students in learning and placement.',
    //         linkText:'Learn',
    //         link:'https://www.google.com'
    //     },
    //     {
    //         icon:'fa-solid fa-rectangle-history-circle-plus',
    //         title:'Learn Project',
    //         description:'We provide courses  that help our students in learning and placement.',
    //         linkText:'Learn',
    //         link:'https://www.google.com'
    //     },
    // ])

    // Slider.create([
    //     {
    //         title:'Learn Java in easy manner',
    //         subTitle:'Java is one of the  most popular language',
    //         imageUrl:'/static/images/s1.jpg',
    //     },
    //     {
    //         title:'what is Django in python',
    //         subTitle:'Django is most favmous web framwork of python programming',
    //         imageUrl:'/static/images/s2.jpg',
    //         class:'active'
    //     },
    //     {
    //         title:'What about Node.js',
    //         subTitle:'Node.js is a runtime environment to execute javascript outside browser',
    //         imageUrl:'/static/images/s3.jpg'
    //     },
    // ])


    // Detail.create({
    //     brandName:"Techsteins infotech",
    //     brandIconUrl:"/static/images/logo.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },
    //     ]
    // })
})

app.listen(process.env.PORT | 5000,()=>{
    console.log("server started")
})