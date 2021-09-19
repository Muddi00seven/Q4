export const CONTRACT_ADDRESS = "0xeFe82fb82AE92Fd2f14EB6D16D8052B364F955E1";

export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "petId",
				"type": "uint256"
			}
		],
		"name": "adopt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adopters",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAdopters",
		"outputs": [
			{
				"internalType": "address[16]",
				"name": "",
				"type": "address[16]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]