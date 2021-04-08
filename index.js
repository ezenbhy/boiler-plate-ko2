const express = require('express')
const app = express()
const port = 3000
const config = require('./config/key');
const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencoded 를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
//application/json 분석해서 가져옴
app.use(bodyParser.json());

//mongoose
const mongoose = require('mongoose')
mongoose.connect(config.MONGO_URI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err)) 





app.get('/', (req, res) => {
  res.send('Hello World! nodemon으로 바뀜')
})


app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보를 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다
  /*body-parser를 통해서 클라이언트 정보가 req.body에 아래처럼 들어있음
  {
    id: "hello",
    password: "123"
  }
  */
  const user = new User(req.body)
  user.save((err, userInfo) => { //몽고디비에서 저장
    if(err) return res.json({success: false, err})
    return res.status(200).json({ //성공시
      success: true
    })
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})