var express = require('express');
var router = express.Router();

//LE ROTTE PARTONO DA /UTENTI

// PAGINA PRINCIPALE UTENTI
router.get('/', function(req, res) {
  res.send('Lista degli utenti');
});

// DETTAGLIO DI UN UTENTE
router.get('/:id', function(req, res) {
  res.send('Dettaglio dell utente con id :' + req.params.id);
});

module.exports = router;
