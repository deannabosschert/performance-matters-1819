const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.set('view engine', 'ejs')
.use(express.static('static'))
// app.use('/static', express.static(path.join(__dirname + 'public')))
app.get('/', function (req, res){
  let route = req.url
  res.sendFile(__dirname+'/static/index.html')
})
app.get('/avontuur', avontuur)
app.get('/detective', detective)
app.get('/dieren', dieren)
app.get('/geschiedenis', geschiedenis)
app.get('/griezelen', griezelen)
app.get('/humor', humor)
app.get('/oorlogVerzet', oorlogVerzet)
app.get('/psychologie', psychologie)
app.get('/spanning', spanning)
app.get('/sport', sport)
app.get('/sprookjes', sprookjes)
app.get('/vriendschapLiefde', vriendschapLiefde)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function avontuur (req, res){
  let route = req.url
  res.render('avontuur.ejs')

}

function detective (req, res){
  let route = req.url
  res.render('detective.ejs')

}
function dieren (req, res){
  let route = req.url
  res.render('dieren.ejs')

}

function geschiedenis (req, res){
  let route = req.url
  res.render('geschiedenis.ejs')

}

function griezelen (req, res){
  let route = req.url
  res.render('griezelen.ejs')

}

function humor (req, res){
  let route = req.url
  res.render('humor.ejs')

}

function oorlogVerzet (req, res){
  let route = req.url
  res.render('oorlogVerzet.ejs')

}

function psychologie (req, res){
  let route = req.url
  res.render('psychologie.ejs')

}

function spanning (req, res){
  let route = req.url
  res.render('spanning.ejs')

}

function sport (req, res){
  let route = req.url
  res.render('sport.ejs')

}

function sprookjes (req, res){
  let route = req.url
  res.render('sprookjes.ejs')

}

function vriendschapLiefde (req, res){
  let route = req.url
  res.render('vriendschapLiefde.ejs')

}
