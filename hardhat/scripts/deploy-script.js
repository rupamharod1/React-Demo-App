const hre = require("hardhat");
const fs = require('fs');
const { verify } = require('../utils/verify')
const { developmentChains } = require("../helper-hardhat-config")


async function main() {
  const deployNetwork = hre.network.name

  const greetingText = "Hello, Hardhat!"
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy(greetingText);

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Network deployed to :", deployNetwork);

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync('../src/utils/contracts-config.js', `
  export const contractAddress = "${greeter.address}"
  export const ownerAddress = "${greeter.signer.address}"
  export const networkDeployedTo = "${hre.network.config.chainId}"
  `)

  if (!developmentChains.includes(deployNetwork) && hre.config.etherscan.apiKey[deployNetwork]) {
    console.log("waiting for 6 blocks verification ...")
    await greeter.deployTransaction.wait(6)

    // args represent contract constructor arguments
    const args = [greetingText]
    await verify(greeter.address, args)
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
