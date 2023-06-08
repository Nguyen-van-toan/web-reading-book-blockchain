const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic ="flock morning document miracle number tank girl february affair cash dice topic lion pride elbow guide poem orient network success sock fade anger hole"

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
  networks: {
    sepolia: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/2d1a4ce65b324e2a9e4531a2b7faf40a")
      },
      network_id: 11155111
    }
  }
};
