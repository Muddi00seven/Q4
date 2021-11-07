const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "promote child furnace come consider border choose close people install stereo output trip kind bacon";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  contracts_build_directory: './frontend/src/contracts/',
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby:  {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/8e698f819a0f44179feeddd651f2aadc")
      },
      network_id: 4,
      from: "0x3914e1fDc20FBf2166B97A144c543234da1BEB67",
    },
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
