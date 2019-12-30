const SHA256 = require('crypto-js/sha256');

class Block {

  // Constructor
  constructor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = 0;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  // Calcules hash for block using all of the data in the block and SHA256 function
  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timeStamp + this.data + this.nonce).toString();
  }

  mineBlock(difficulty){
  }

}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()];
  }

  createGenesis() {
    return new Block(0, "12/29/2019", "Genesis block", "0")
  }

  latestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  checkValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

}

/*
(function () {
  var testBlock = new Block(1200, "hello");
  console.log(testBlock);
})()
*/

let jsChain = new Blockchain();
jsChain.addBlock(new Block("1/1/2020", {amount: 5}));
jsChain.addBlock(new Block("1/2/2020", {amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));

if (jsChain.checkValid()) {
  console.log("\nBlockchain is valid.");
}
else {
  console.log("\nInvalid blockchain.")
}
