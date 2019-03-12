const express = require('express');
const app = express();
const port = 4000;
const path = require('path')
const fs = require('fs')

app.set('view engine', 'ejs')
.use(express.static('static'))
// app.use('/static', express.static(path.join(__dirname + 'public')))
app.get('/', function (req, res){
  let route = req.url
  res.sendFile(__dirname+'/static/index.html')
})
app.get('/:id', get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function get(req, res){
  let id = req.params.id
  let result = {errors: [], data: null} // db.get(id)
  const dataJson = 'data.json'
  fs.readFile(__dirname + '/data.json', function(err, data){
    const jsonData = JSON.parse(data.toString())

    // console.log(typeof jsonData)

    jsonData.forEach(function(boek) {
      const genreNaam = boek.genre

      if (id === "humor"){
         if(genreNaam === "Humor"){
           console.log('dit is een humoristisch verhaal')
           res.format({
            html: () => res.render('humor.ejs')
          })
         }

      }
    })



  })


  //
  // let data = dataJson.data.get("author")
  // // if(id === "adventure"){
  //
  //   res.format({
  //     json: () => res.json(result),
  //     html: () => res.render(id + '.ejs')
  //   })


}

// function get(req, res){
//   var id = req.params.id
//   var result = {errors: [], data: null} // db.get(id)
//   var genreExists = db.get(id)
//   if(!genreExists){
//     if (db.removed(id)) {
//       return showError(410,'Gone', res)
//     }
//
//   }
//   result.data = db.get(id)
//   res.format({
//     json: () => res.json(result),
//     html: () => res.render('detail.ejs', Object.assign({}, result, helpers))
//   })
// }
