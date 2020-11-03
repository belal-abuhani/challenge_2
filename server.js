

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false })) // parse the buffered data
app.use(express.json()) // application/json
app.use(express.static(__dirname +"/./client"))


// app.get('/json' , (req,res)=>{

// })
function arrayToCSV (data) {
    csv = data.map(row => Object.values(row));
    csv.unshift(Object.keys(data[0]));
    return csv.join('\n');
  }

app.post('/upload-json' ,(req,res)=>{
    console.log(req.body)

   var  csvData = arrayToCSV(req.body)
    res.json(csvData)

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

