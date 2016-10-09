const express = require('express'),
      router = express.Router(),
      bmf = require('bmf-trading-settlements');;

router.get('/:contract', function(req, res, next) {
  bmf(req.params.contract).then((data) => {
    res.send(data);
  })
});

module.exports = router;
