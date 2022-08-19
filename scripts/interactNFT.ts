import { ethers } from "hardhat";

async function main() {

    const NFTdeploy = ethers.getContractFactory("WakandaForever");
    const CONTRACTADDRESS = "0x7BEbC67d54D5Be6949dBA7A83cA33B251F201608";
    const CONTRACTADDRESS2 = "0x0B5f0Cdb79eDAF192B3c19cd9Ddc5A3f1772017E";

    const URI = "ipfs://QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE";
    const URI2 ="https://ipfs.filebase.io/ipfs/QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE";

    const userAddress = "0xEd521548b91C5e4f58bCc1f30dE9691eff517048"

    const interact = await (await NFTdeploy).attach(CONTRACTADDRESS2);

    const mint = interact.safeMint(userAddress, URI2);
    const mintResult = await (await mint);

    console.log("mint successfull:", mintResult);

    // hash: '0xaa0ef394db2961e663fb6116d49a0d6f971c8bb0fcb3bd933503ade9ffff643
    //  hash: '0xa09c397a74b452ee435f415fd596f432261689cd4b26bf72433aebbff47c1ba0'


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

