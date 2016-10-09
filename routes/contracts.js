const express = require('express'),
      router = express.Router(),
      bmf = require('bmf-trading-settlements');;

router.get('/:contract', function(req, res, next) {
  bmf(req.params.contract).then((data) => {
    res.status(200).send(data);
  }).catch(err => {
    res.status(500).send({
      err: err
    });
  });
});

module.exports = router;
