const express = require('express'),
      router = express.Router(),
      bmf = require('bmf-trading-settlements');

function sendData(res, promise) {
  promise.then((data) => {
    res.status(200).send(data);
  }).catch(err => {
    res.status(500).send({
      err: err
    });
  });
}

router.get('/', function(req, res, next) {
  const promise = bmf();
  sendData(res, promise);
});

router.get('/:contract', function(req, res, next) {
  const promise = bmf(req.params.contract);
  sendData(res, promise);
});

module.exports = router;
