      REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the “sender” address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.
    5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
       to the amount that is supposed to be burned.

       PROCEDURE:
       1)For the first task i created a contract MyToken inside the contract i created three piublic variables tokenName,tokenAbbreviations and totekSupply and assigned their respective values to them the tokenName will keep record of the name of the token the tokenAbbreviations contains the abbreviation for the token and the totalsupply will keep track of the balance.
       2)Then we created a mapping named balance which will associate each address with an unsigned integer.
       3) Then we created a mint function which will have two params which i name 'adr' which is an address and an unsigned integer "value" this function will add the value to the total supply and the balance related to the address which we will input
       4) At last we created a function burn which will take same parameters as mint function and will check if the value which we have inserted is lesser than the balance of the address and if the condition will be satisfied the value will be deducted from balance of address and totalvalue
