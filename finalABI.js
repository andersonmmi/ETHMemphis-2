const AFAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_firstName",
        "type": "bytes32"
      },
      {
        "name": "_lastName",
        "type": "bytes32"
      },
      {
        "name": "_email",
        "type": "bytes32"
      },
      {
        "name": "_gitHubUrl",
        "type": "bytes32"
      },
      {
        "name": "_linkedInUrl",
        "type": "bytes32"
      },
      {
        "name": "_interest",
        "type": "bytes32"
      },
      {
        "name": "_shareRoom",
        "type": "bool"
      }
    ],
    "name": "apply",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getApplicants",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bool[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalApplications",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newOrganizer",
        "type": "address"
      }
    ],
    "name": "addOrganzier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_n",
        "type": "uint256"
      }
    ],
    "name": "getApplicant",
    "outputs": [
      {
        "name": "_firstName",
        "type": "bytes32"
      },
      {
        "name": "_lastName",
        "type": "bytes32"
      },
      {
        "name": "_email",
        "type": "bytes32"
      },
      {
        "name": "_gitHubUrl",
        "type": "bytes32"
      },
      {
        "name": "_linkedInUrl",
        "type": "bytes32"
      },
      {
        "name": "_interest",
        "type": "bytes32"
      },
      {
        "name": "_shareRoom",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_applicant",
        "type": "address"
      }
    ],
    "name": "Apply",
    "type": "event"
  }
];

module.exports = AFAbi;
