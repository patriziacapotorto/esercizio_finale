var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var path = require('path');
var listautenti = require('./database.json');

//LE ROTTE PARTONO DA /UTENTI
// PAGINA PRINCIPALE UTENTI
router.get('/', function(req, res) {
  res.status(200).json(listautenti);
});

// DETTAGLIO DI UN UTENTE
router.get('/id/:id', function(req, res) {
  var id = req.params.id;
  var utente = listautenti.find(function(el){
    return el.id == id;
  });
  if(utente){
         res.status(200).json(utente);
            }else{
                res.status(404).send("utente non trovato");
              }
  // var utente ={};
  //loop1:
  // for(let i =0; i < listautenti.length; i++){
  //   if(id == listautenti[i].id){
  //     utente = listautenti[i];
  //     break loop1;
  //   }
  // }
});

//http://localhost:5000/users/genere?genere=Male
router.get('/genere', function(req,res){
  var genere = req.query.genere;
  var listafiltrata = listautenti.filter(function(el){
    return el.genere == genere;
  });
  if(listafiltrata.length){
    res.status(200).json(listafiltrata);
  }else{
    res.status(404).send("nessu utente di genere: "+genere);
  }
});

//http://localhost:5000/users/nome/Chris
router.get('/nome/:nome', function(req, res) {
  var nome = req.params.nome;
  var utentenome = listautenti.find(function(el){
    return el.nome == nome;
  });
  if(utentenome){
         res.status(200).json(utentenome);
            }else{
                res.status(404).send("utente non trovato");
              }
});

//http://localhost:5000/users/id/10
router.delete('/id/:id', function(req, res) {
  var id = req.params.id;

  var utente = listautenti.find(function(el){
    return el.id == id;
  });
  var indice = listautenti.indexOf(utente);
  listautenti.splice(indice,1);
  jsonfile.writeFile(path.join(__dirname,"database.json"),listautenti,function(err){});
  res.json(listautenti);
});


//ricerca http://localhost:5000/users/cognome/Harvey
router.get('/cognome/:cognome', function(req, res) {
  var cognome = req.params.cognome;
  var utentecognome = listautenti.find(function(el){
    return el.cognome == cognome;
  });
  if(utentecognome){
         res.status(200).json(utentecognome);
            }else{
                res.status(404).send("utente non trovato");
              }
});

//aggiornate un utente
// router.post('/id/:id', function(req, res) {
//   var id = req.params.id;
//   var utente = listautenti.find(function(el){
//     return el.id == id;
//   });
//   utente.nome = "Stefano";
//   utente.cognome = "Borzoni"
//   var indice = listautenti.indexOf(utente);
//   listautenti.splice(indice,0);
//   jsonfile.writeFile(path.join(__dirname,"database.json"),listautenti,function(err){});
//   res.json(listautenti);
// });

//aggiornate un utente
router.put('/id/:id', function(req, res) {
  var id = req.params.id;
  var aggiornato = req.body;
  var utente = listautenti.find(function(el){
    return el.id == id;
  });
  var indice = listautenti.indexOf(utente);
  listautenti.splice(indice,1,aggiornato);
  jsonfile.writeFile(path.join(__dirname,"database.json"),listautenti,function(err){});
  res.json(listautenti);
});


//creare e aggiungere un nuovo utente in coda all'array
router.post('/',function(req,res){
  var nuovo = req.body;
  console.log(nuovo);
  var indici =[];
  for(var i = 0; i < listautenti.length; i++) {
    indici[i] = listautenti[i].id;
  }
  var ultimo_id= Math.max(...indici);
  nuovo.id = ultimo_id +1;
  listautenti.push(nuovo);
  jsonfile.writeFile(path.join(__dirname,"database.json"),listautenti,function(err){});
  res.json(listautenti);
});


module.exports = router;
