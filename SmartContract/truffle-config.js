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
  }
};
