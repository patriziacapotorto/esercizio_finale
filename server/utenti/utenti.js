var express = require('express');
var router = express.Router();

var listautenti = require('./database.js');

//LE ROTTE PARTONO DA /UTENTI
// PAGINA PRINCIPALE UTENTI
router.get('/', function(req, res) {
  res.json(listautenti);
});

// DETTAGLIO DI UN UTENTE
// router.get('/:id', function(req, res) {
//   res.send('Dettaglio dell utente con id :' + req.params.id);
// });

module.exports = router;
