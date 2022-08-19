import { ethers } from "hardhat";

async function main() {

    const NFTdeploy = ethers.getContractFactory("WakandaForever");
    const NFT = (await NFTdeploy).deploy();

    await (await NFT).deployed();

    console.log("NFT deployed at:", (await NFT).address);

}

// NFT deployed at: 0x7BEbC67d54D5Be6949dBA7A83cA33B251F201608
// NFT deployed at: 0x0B5f0Cdb79eDAF192B3c19cd9Ddc5A3f1772017E

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  