<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## React Hardhat Boilerplate

This is React & Hardhat boilerplate project designed for quick and easy decentralized applications development

<p align="center">
  <img alt="Dark" src="https://user-images.githubusercontent.com/83681204/172961326-d0d686c2-f9bd-40d6-9a63-e076defc6b73.png" width="100%">
</p>

## Tech Stack :

* [Solidity](https://docs.soliditylang.org/)
* [Hardhat](https://hardhat.org/getting-started/)
* [React.js](https://reactjs.org/)
* [ethers.js](https://docs.ethers.io/v5/)
* [web3modal](https://github.com/Web3Modal/web3modal)
* [material ui](https://mui.com/getting-started/installation/)


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
       <li><a href="#prerequisites">Prerequisites</a></li>
       <li><a href="#project-structure">Project structure</a></li>
       <li><a href="#initial-setup">Initial Setup</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to Use</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Please install or have installed the following:
* [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/)
* [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) Chrome extension installed in your browser
* [Ganache](https://trufflesuite.com/ganache/) for local smart contracts deployement and testing

### Project structure

This a full stack web3 decentralized application boilerplate built using Hardhat/React js, so the project is devided into 2 main parts:
<ul>
 <li><b>Smart contract/backend side:</b></li>
 Located in the hardhat folder, it contains the blockchain developement envirenment built using Hardhat, with all the smart contracts tests, deployement scripts and the plugins (etherscan, openzeppelin,...). 
  <li><b>front-end side:</b></li>
The code for the UI can be found in the src folder (as in all reactjs apps)
</ul>

### Initial Setup
1. Clone the repository and install all the required packages by running:
   ```sh
   git clone https://github.com/Aymen1001/React-Hardhat-Boilerplate.git
   cd React-Hardhat-Boilerplate
   yarn
   ```
2. Start the ganache network and export the private key of the first account to the .env file in the hardhat folder, it will be used for deploying the contracts and you can also add Etherscan apikey for verifications:
   ```sh
    RINKEBY_ETHERSCAN_API_KEY="your etherscan api key"
    RINKEBY_RPC_URL="https://eth-rinkeby.alchemyapi.io/v2/apiKey"
    POLYGON_RPC_URL="Your polygon RPC url from alchemy or infura"
    MUMBAI_RPC_URL="Your mumbai RPC url from alchemy or infura"
    PRIVATE_KEY="ganahce-private-key"
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## How to Use

After going through all the installation and setup steps, you'll need to deploy the smart contract to the ganache network by running: 
   ```sh
   cd hardhat
   npx hardhat run scripts/deploy-script.js --network ganache
   ```
This will create a config.js file and an artifacts folder and transfer them to the src folder to enable the interaction between the contract and the UI

If you want to test the functionnalities of your contract, you can do it by running:
   ```sh
   npx hardhat test
   ```

To start the app you have to go back to the nft-draw-minter folder and run the command:
   ```sh
   yarn start
   ```
   
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contact -->
## Contact

If you have any question or problem running this project just contact me: aymenMir1001@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
