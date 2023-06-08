const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const Book = artifacts.require("Book");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, Book);
  deployer.deploy(MetaCoin);
  deployer.deploy(Book);
};
