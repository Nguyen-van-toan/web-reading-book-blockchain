const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic ="flock morning document miracle number tank girl february affair cash dice topic lion pride elbow guide poem orient network success sock fade anger hole"

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8000,
      network_id: "*",
      gas: 5000000
    },
    loc_fuji_fuji: {
      network_id: "*",
      port: 8000,
      host: "127.0.0.1"
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
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
