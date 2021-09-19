
export const setupWeb3 = (web3) =>{
    return {
        type: "SETUP_WEB3",
        payload: web3
    }
}

export const setupContract = (contract) =>{
    return {
        type: "SETUP_CONTRACT",
        payload: contract
    }
}

export const setupEthereumAccounts = (accounts) =>{
    return {
        type: "SETUP_ETHEREUM_ACCOUNTS",
        payload: accounts
    }
}
export const setupAdopters = (adopters) =>{
    return {
        type: "SETUP_ADOPTERS",
        payload: adopters
    }
}