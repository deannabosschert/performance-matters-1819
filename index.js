const express = require('express');
const app = express();
const port = 4000;
const path = require('path')
const fs = require('fs')
var multer = require('multer')


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
  const id = req.params.id
  const result = {errors: [], data: null} // db.get(id)
  const jsonFile = 'data.json'

  //  zorg er eerst voor dat je jsonfile wordt geparsed naar strings
  // dan heb je die data in een lijst staan en loop je erdoorheen met een forEach
  // binnen die forEach filter je dan ff op de soorten genres, dat alleen die soorten boeken worden ingeladen
  // ook ff nieuwe benamingen geven, dat je in je .ejs kunt selecteren met data.genre.titel of whatever
// buiten de scope van je foreach (dus zonder dat dat loopt lol, mss ook buiten readFile?) dat de bijbehorende id+.ejs wordt gerenderd
  fs.readFile(__dirname + '/data.json', function(err, data){
    const jsonData = JSON.parse(data.toString())

    jsonData.forEach(function(boek) {

        console.log('dit is een verhaal over ' + id)
        res.format({
           json: () => res.json(result),
           html: () => res.render(id + '.ejs')
        })
    })
  })

} //einde van get
// een genre zoals in de json file = boek.genre
// er wordt een id opgevraagd --> check of ie uberhaupt voorkomt in boek.genre
// zoja --> id is identiek aan de naam van een genre dus dat zit nog steeds in ID
// laad dan id.ejs
//
//       wanneer de opgevraagde id voorkomt in genre,
//
//       laad dan genreNaam.ejs
//
//
//       if (id ===  boek.genre){
//          if(genreNaam === "Humor"){
//            console.log('dit is een verhaal over ' + id)
//            res.format({
//               json: () => res.json(result),
//               html: () => res.render(id + '.ejs')
//             })
//            // res.end()
//          }
//
//       }


  //
  // let data = jsonFile.data.get("author")
  // // if(id === "adventure"){
  //
  //   res.format({
  //     json: () => res.json(result),
  //     html: () => res.render(id + '.ejs')
  //   })




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
