const transactionModel = require('../models/transactionModel');

const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

const sendTransaction = async (source, destination, value) => {
  console.log(`sendTransaction method called..`);
  return web3.eth
    .sendTransaction({
      from: source,
      to: destination,
      value: value,
    })
    .then((receipt) => {
      console.log(receipt);
      return receipt;
    });
};

module.exports = {
  sendTransaction,
};
