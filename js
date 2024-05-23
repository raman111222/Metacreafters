let nfts = [];

function mintNFT(name, description) {
  let NFT = {
    name: name,
    description: description,
  };
  nfts.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Nft number: " + (i + 1));
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Number of NFTs: " + nfts.length);
}

// call your functions below this line
mintNFT("MEow", "Just testing");
mintNFT("apple", "second one");
mintNFT("banan", "Third one");

listNFTs();
getTotalSupply();
