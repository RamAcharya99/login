// const express = require("express")
// // app.use(ab)

// // function ab(req, res, next) {
// //     console.log("i am from middleware");
// //     next();
// // }
// // app.use((req, res, next) => {
//     // req.body={"random" :"random"}
//     // res.sendStatus(500)
//     // console.log("before");
//     // return next();
   
// // })

// var bodyParser = require('body-parser')
// const app = express();
// app.use(express.json())
// app.use(ab)

// function ab(req, res, next) {
//     console.log("i am from middleware");
//     next()
// }  
// app.use((req, res, next) => {
//     // req.body={"random" :"random"}
//     // res.sendStatus(500)
//     console.log("before");
//     return next();
// })


// app.get("/dynamichtml", ab, (req, res) => {
//     // console.log("hello");
//     // res.send("biratnagar");
     
    
//     res.sendFile(("index.html"))

//     res.send("test")

// })

// app.use((req, res, next) => {
//     res.status(404).send("404 page not found")
// })
// app.use((err, req, res, next) => {
//     console.log({ err });

//     res.send("Error")
// })



// app.listen(8000, () => {
//     console.log("listening")
// })

    
const express =require("express")
console.log(express);