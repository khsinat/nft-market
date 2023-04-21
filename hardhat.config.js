const fs = require('fs');
require('@nomicfoundation/hardhat-toolbox');

// const privateKey = fs.readFileSync('.secret').toString().trim();
const privateKey = '54f326952e5fe3956cf708850f1dc3fb8631fb33ef203f35adbd4f071dd0c9ea';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/NAjihh401LWgFdCSRpNgqxRPA_Uop2gI',
      accounts: [
        `0x${privateKey}`,
      ],
    },
  },
  solidity: '0.8.17',
};
