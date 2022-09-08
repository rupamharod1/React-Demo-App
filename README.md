<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## React Hardhat Boilerplate

This is a React & Hardhat boilerplate project designed for quick and easy decentralized applications development (writing smart contracts, testing, deployements, Etherscan verifications, connecting with front end).

<p align="center">
  <img alt="Dark" src="https://user-images.githubusercontent.com/83681204/172961326-d0d686c2-f9bd-40d6-9a63-e076defc6b73.png" width="100%">
</p>

## Tech Stack :

* [Solidity](https://docs.soliditylang.org/)
* [Hardhat](https://hardhat.org/getting-started/)
* [React js](https://reactjs.org/)
* [ethers.js](https://docs.ethers.io/v5/)
* [web3modal](https://github.com/Web3Modal/web3modal)
* [material ui](https://mui.com/getting-started/installation/)
* [redux](https://redux.js.org)


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
 Located in the smart_contracts folder, it contains the blockchain developement envirenment built using Hardhat, with all the smart contracts tests, deployement scripts and the plugins (etherscan, openzeppelin,...). 
  <li><b>front-end side:</b></li>
The code for the UI can be found in the front-end folder, it's built with React JS and uses web3modal to connect with browser wallets liek metamask, walletconnect,... and it communicate with the contracts using ethers.js library.
</ul>

### Initial Setup
1. Clone the repository :
   ```sh
   git clone https://github.com/kaymen99/React-Hardhat-Boilerplate.git
   cd React-Hardhat-Boilerplate
   ```
   And install all the required packages by running :
   * for the backend : 
      ```sh
     cd smart_contracts
     yarn
     ```
   * for the front-end : 
      ```sh
     cd front-end
     yarn
     ```
2. Private key & Network Urls setup: in the smart_contracts folder you'll find a .env file, it's used to store all the sensible data/keys like your private key, RPC url for mainnet, rinkeby, kovan... (you get RPC url from services like Infura or Alchemy for free), you can also provide Etherscan api key to allow automatic contracts verifications :
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

After going through all the installation and setup steps, you can deploy your contract by following the same code used in deploy-script.js, you just need to change the contract name and provide your constructor's arguments, then by running the command below the contract will be deployed on your choosen network (and verified on Etherscan in case of real or testnets): 
   ```sh
   cd smart_contracts
   npx hardhat run scripts/deploy-script.js --network <<network-name>>
   ```
This will also create a config.js file and an artifacts folder and transfer them to the src folder to enable the interaction between the contract and the UI

If you want to test the functionnalities of your contract, you can write basic tests files in the test folder and again you can follow the same architecture used in the sample-test.js, then run the command:
   ```sh
   npx hardhat test
   ```

To start the app you have to run the command:
   ```sh
   cd front-end
   yarn start
   ```
In the utils folder you'll find some useful scripts used in the smart contracts development process, for the moment it contains:
    <ul>
     <li>verify.js : for performing programmtic contract verification on Etherscan</li>
    </ul>
   
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contact -->
## Contact

If you have any question or problem running this project just contact me: aymenMir1001@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
