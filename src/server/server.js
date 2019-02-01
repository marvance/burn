const express = require("express");
const os = require("os");
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: '../client/uploads/'})
const axios = require('axios')

const app = express();

app.use(bodyParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./uploads'))
app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get('/test', function(req,res){
  console.log("Working")
  res.send(req.body)
})

app.post('/createprofile', upload.single('photo'), function(req, res){
  console.log(req.body)
  console.log(req.file)
  res.send('Success!')
})

app.listen(8080, () => console.log("Listening on port 8080!"));