
// new abi for updated contract
const AFAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getApplicants",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
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
        "name": "_name",
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
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "applications",
    "outputs": [
      {
        "name": "applicant",
        "type": "address"
      },
      {
        "name": "name",
        "type": "bytes32"
      },
      {
        "name": "email",
        "type": "bytes32"
      },
      {
        "name": "gitHubUrl",
        "type": "bytes32"
      },
      {
        "name": "linkedInUrl",
        "type": "bytes32"
      },
      {
        "name": "interest",
        "type": "bytes32"
      },
      {
        "name": "shareRoom",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
        "name": "_applicantAddr",
        "type": "address"
      },
      {
        "name": "_name",
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

// original ABI
const AFAbi_old = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      },
      {
        "name": "_gitHubUrl",
        "type": "string"
      },
      {
        "name": "_linkedInUrl",
        "type": "string"
      },
      {
        "name": "_interest",
        "type": "string"
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
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      },
      {
        "name": "_gitHubUrl",
        "type": "string"
      },
      {
        "name": "_linkedInUrl",
        "type": "string"
      },
      {
        "name": "_interest",
        "type": "string"
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
