##nane
Project Title
Simple overview of use/purpose.

Description
For the first task, I created a contract named MyToken. Inside this contract, I defined three public variables: tokenName, tokenAbbreviations, and totalSupply, and assigned them respective values. The tokenName records the name of the token, the tokenAbbreviations contains the abbreviation for the token, and the totalSupply keeps track of the overall balance. Next, I created a mapping called balance which associates each address with an unsigned integer. Then, I implemented a mint function with two parameters: an address named 'adr' and an unsigned integer named 'value'. This function adds the specified value to the total supply and the balance associated with the input address. Lastly, I developed a burn function that takes the same parameters as the mint function. This burn function checks if the value to be deducted is less than the balance of the specified address. If the condition is satisfied, the specified value is deducted from both the balance of the address and the total supply.
Getting Started
Go to https://remix.ethereum.org/
Create a new file with file extension as .sol and compile the program.

Authors
Ramandeep singh
