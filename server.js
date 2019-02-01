const express = require("express");
const os = require("os");
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
// const upload = multer({dest: '../client/uploads/'})

const port = process.env.PORT || 5000;

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('../client/uploads/'))
// app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, '/dist')));
// app.use(express.static(path.join(__dirname, '/uploads')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);


app.get('/test', (req, res) => {
  res.send({express: 'Express connected to React'})
})



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage})

app.post('/createprofile', upload.single('photo'), function(req, res){
  const testBody = req.body
  const testFil = req.file
  console.log("BODY:", testBody)
  console.log("FILE: ", testFil)
  console.log("PHOTO: ", req.file.originalname)

  res.send({express: 'Success!'})
})

app.listen(port, () => console.log(`Listening on port ${port}`));