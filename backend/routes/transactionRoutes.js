var express = require('express');
const { transaction } = require('../modules');
var router = express.Router();

router.post('/send', async function (req, res) {
  console.log(`POST called =====>>>>> ${req.body}`);

  const source = req.body.source;
  const destination = req.body.destination;
  const value = req.body.value;

  if (!source || !destination || !value) {
    return res.status(400).send('Missing Values');
  }
  res.send(await transaction.sendTransaction(source, destination, value));
  // Step 2:
  // i. get the post params from the request
  // ii. call the module sendtransaction method and pass the params
  // iii. send the returned receipt in the response
});

module.exports = router;
