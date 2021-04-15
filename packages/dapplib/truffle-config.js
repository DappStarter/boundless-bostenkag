require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile proof hunt option bone switch'; 
let testAccounts = [
"0x46917367a0147e730056a0b5f16b28cc8c3bb6f0beaa31d16261ce1a395fd61e",
"0xe0bd8aa497e5147d05df6b6ef6a920c4ba746f2bccfb9ce77e819f5a4520306e",
"0xdc5f7b7a1716f267c4bb84e06d32e5e9b2e76364eb0177b9744dbb51deb0b699",
"0x14fad8bf285544b5559ec540c2299ea8d7f951116bb2dac8d4bfaddb603cb570",
"0x041602544e87d3b4efd0950c27eb7838a428a7d6ba48b5136f68274ab0d4b2fc",
"0xc8033b1e8acde62b520948bfb79aa9e08eaedbbcd9a6ac9f999235be761c60e1",
"0x5c6d412bf9ae34f44849927f80f03422045737961b71248c4ae3651c5257c73d",
"0xcecf4e4444becf59aae52b5201c0ebb9b6190e0e53bcbd6783405ab1226a9320",
"0x740a8d80bd1d769e726da1656ee3a406c02e18a43816ef13cb0aee66d25ad000",
"0x33f27d8fb18bb6932f8bf293137a8f76db6190bc5668b5dde888505e0f31da65"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
