var express = require('express');
var app = express(); //lancio express
var path = require('path');

// var utenti = require('./utenti/utenti.js');
// app.use('/utenti', utenti);

// app.use('/images', express.static(path.join(__dirname,'..','client','immagini')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});

app.listen(5000, function(){
  console.log("server in ascolto su http://localhost:5000");
});
// app.get('/films', function(req,res){
//   res.json({"titolo":"rocky","anno":"2000"});
// });
//
// app.get('/ricerca',function(req,res){
//   res.redirect("http://www.google.com");
// });
//
// app.get('/documento',function(req,res){
//   res.download(path.join(__dirname,"..","files","documento.pdf"));
// });
//
// app.get('/apridocumento',function(req,res){
//   res.sendFile(path.join(__dirname,"..","files","documento.pdf"));
// });
//
// app.get('/status',function(req,res){
//   res.status(404).send('Bad Request');
// });
//
// app.get('/films/:id', function (req, res) {
//   // console.log(req.params.id);
//   var id_richiesto = req.params.id;
//   res.send('hai scelto il film con id: '+id_richiesto);
// });
//
// //nel browser si scrive: movies?title=rocky&anno=2000
// app.get('/movies', function (req, res) {
//   var titolo = req.query.title;
//   var anno = req.query.anno;
//   res.send('Il film da te cercato è ' + titolo+' e anno '+anno);
// });
