const express = require('express')
const app = express()
const port = 5000

//mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ezenbhy:a12345751225@cluster0.r4vtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err)) 





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})