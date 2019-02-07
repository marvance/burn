const express = require("express");
const os = require("os");
const path = require('path');
var favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: './uploads/'})

const port = process.env.PORT || 5000;

const app = express();

app.use(favicon(path.join(__dirname, 'src/client/images', 'favicon.ico')));



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./uploads/'))
// app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, '/dist')));
// app.use(express.static(path.join(__dirname, '/uploads')));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);


app.get('/test', (req, res) => {
  res.send({express: 'Express connected to React'})
})


const allCounts = [];
app.post('/newcount', function(req, res){
  
  allCounts.push(req.body)
  console.log("DATA: ", req.body)
  console.log("CONTS: ", allCounts)
  // res.send({express: "success!"})
  res.send(allCounts)
})



app.post('/createprofile', upload.single('photo'), function(req, res){
  const testBody = req.body
  const testFil = req.file
  console.log("BODY:", testBody)
  console.log("FILE: ", testFil)
  console.log("PHOTO: ", req.file.originalname)

  res.send({express: req.file})
})

app.listen(port, () => console.log(`Listening on port ${port}`));