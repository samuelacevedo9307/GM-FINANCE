import Web3 from "web3";
import { useEffect } from "react";
import MiNFT from "../contracts/abi.json";
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const contractAddress = "0x754BD28BF6750b26DDAA5E5f1E508620A80C833a";
const contractAbi = MiNFT.abi;
const abi = new web3.eth.Contract(contractAbi, contractAddress);

async function _mintNFT() {
  const accounts = await web3.eth.getAccounts();
  const gasPrice = await web3.eth.getGasPrice();
  console.log(gasPrice);
  const gasLimit = 5000000;
  const result = await abi.methods.mint().send({ from: accounts[0] });
  const numberNFT = await abi.methods.getTokenMetadata(accounts[0]).call();
  return numberNFT[3];
}
async function _setActive(_bool) {
  const accounts = await web3.eth.getAccounts();
  const result = await abi.methods.setActive(_bool).send({ from: accounts[0] });
  return result;
}
async function _getwalletTokens() {
  const accounts = await web3.eth.getAccounts();
  const result = await abi.methods.getWalletTokens(accounts[0]).call();
  return result;
}

async function _getTokenMeta() {
  let Data = [];
  const accounts = await web3.eth.getAccounts();

  const result = await abi.methods.getTokenMetadata(accounts[0]).call();
  Data.push(result);

  return Data;
}

export { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta };
