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
app.get('/:id', get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function get(req, res){
  var id = req.params.id
  // var result = {errors: [], data: null} // db.get(id)
  // result.data = db.get(id)
  res.format({
    // json: () => res.json(result),
    html: () => res.render(id + '.ejs')
  })
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
