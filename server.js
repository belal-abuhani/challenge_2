

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false })) // parse the buffered data
app.use(express.json()) // application/json
app.use(express.static(__dirname +"/./client"))


// app.get('/json' , (req,res)=>{

// })

app.post('/upload-json' ,(req,res)=>{
    console.log(req.body)
    res.send("Asd")

})

// app.post('/todo' , (req,res) =>{   //   (req,res)  ==> controller
//     db.query( `select * from todo` , (err , todo) => { //  ==>   model
//         if(err){
//             res.sendStatus(404)
//         }else{
//             res.json(todo)
//         }
//     } )
// })




app.listen(3000,()=>{
    console.log("server is lis...")
})

