import { ethers } from "hardhat";

async function main() {

    const NFTdeploy = ethers.getContractFactory("WakandaForever");
    const NFT = (await NFTdeploy).deploy();

    await (await NFT).deployed();

    console.log("NFT deployed at:", (await NFT).address);

}


// NFT deployed at: 0x0B5f0Cdb79eDAF192B3c19cd9Ddc5A3f1772017E


// Rinkeby EOA Address: 0xEd521548b91C5e4f58bCc1f30dE9691eff517048
 // Tnx Hash: "0x2cde98bd0e785b4088b3e0ef3e041db6a6b0ff9a23c8de4056ad5f602967a6d2"
// OpenSea: https://testnets.opensea.io/assets/rinkeby/0x0b5f0cdb79edaf192b3c19cd9ddc5a3f1772017e/1



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  