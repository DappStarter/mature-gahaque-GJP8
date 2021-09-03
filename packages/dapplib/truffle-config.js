require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan recipe mad around imitate private equal gaze'; 
let testAccounts = [
"0x18f99428144882d9b2f1bb9abe74f74b99b0570c65acaac684f5267ba4544149",
"0x70f9670fec793dd224aeff4244e276cd1c70b59e53e506600060861851710763",
"0xb4dcaca86f92d12dd50b4db549a713a5acff28002504d503d1dcd2390127eb03",
"0x4cc9d8ae1d6a1cca9fe32b5dac39f6fbabcd2654c1c81e434b4849806b3114ac",
"0xfd3e6fd31e0fa4f305146ad7e83ac04ebf0ae7da8e70926f74fb71313fe2ba96",
"0x8d454f394d7f4fe1a231a7b75a1345c43b3da372e47bb966b7b06f304b36153a",
"0x1c9a4dd92e980c56728099b3addc2c85b85ee992d2bce244cbd6f926eb5b5d0d",
"0x21f9415c090aa5ae8b8d2de31ff84e429974f512027e7d62b9b3767960c6f2dd",
"0xb291d12c2658d82ef26602d3aa239aac2a970e65c6fe93b619c48b4acce2bca3",
"0x7974bd3f294c264d403eddf3a335c29830e6352b256a6dfc6c5760f2a66b4f28"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


