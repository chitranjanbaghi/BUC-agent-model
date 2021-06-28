const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const ConJson = require("./build/contracts/BUC.json")

const init = async () => {
    // const contract = new web3.eth.Contract(,0xF2ECb76a0Eb4F1C7d00084F121Fe9cc9d1dA8 )
    console.log(ConJson.abi);
}

init()