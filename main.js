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

(function () {
  var testBlock = new Block(1200, "hello");
  console.log(testBlock);
})()
