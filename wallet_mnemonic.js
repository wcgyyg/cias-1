require('dotenv').config();
const fs = require('fs');
const bip39 = require("bip39");
const { crypto } = require("cosmos-lib");
const {DirectSecp256k1Wallet} = require("@cosmjs/proto-signing");

const getAccountFromMnemonic = async () => {

    const mnemonic = bip39.generateMnemonic();
    const keys = crypto.getKeysFromMnemonic(mnemonic);
    const wallet = await DirectSecp256k1Wallet.fromKey(Buffer.from(keys.privateKey), "celestia");
    const [account] = await wallet.getAccounts();
    const walletAddress = account.address;

    console.log('mnemonic: ', mnemonic)
    console.log('privateKey: ', keys.privateKey.toString('hex'))
    console.log('walletAddress: ', walletAddress)

}

getAccountFromMnemonic()