var express = require('express');
var router = express.Router();

var listautenti = require('./database.js');

//LE ROTTE PARTONO DA /UTENTI
// PAGINA PRINCIPALE UTENTI
router.get('/', function(req, res) {
  res.status(200).json(listautenti);
});

// DETTAGLIO DI UN UTENTE
router.get('/:id', function(req, res) {
  var id = req.params.id;
  var utente ={};
  var utente = listautenti.find(function(el){
    return el.id == id;
  });
  res.status(200).json(utente);
  //loop1:
  // for(let i =0; i < listautenti.length; i++){
  //   if(id == listautenti[i].id){
  //     utente = listautenti[i];
  //     break loop1;
  //   }
  // }
});

module.exports = router;
