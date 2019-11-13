const Matic = require('maticjs').default
const config = require('./config')

const recipient = '0x871bD8308e84Be1F0F62C121d4B2ae3f14DcD15a' // receipent address

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '10000000000000000' // amount in wei 0.01 TEST participation fees 0.01 DAI considering

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
})

var Web3 = require('web3');
var Tx = require('ethereumjs-tx');

web3=matic.web3;

function addBal(_quantity,public){
    encoded = ContractInstance.methods.addBal(public,_quantity).encodeABI()

    var tx = {
    to : ContractAddress,
    gasPrice: "0",
    gas: "3000000",
    data : encoded
    }

    web3.eth.accounts.signTransaction(tx, '0xPRIVATEKEY').then(signed => {
        
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
    });

}
