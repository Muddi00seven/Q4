import { setupWeb3, setupContract, setupEthereumAccounts, setupAdopters } from './actions';
import Web3 from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contract/marketPlace'

export const LoadBlockchain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(setupEthereumAccounts(accounts));

        }
    }
    catch (error) {
        console.log("error", error)
    }
}



export const MintNftAsync = (web3, contract, accounts) => {
        try {
            let receipt = contract.methods.mintNFT().send({ from: accounts[0] });
            return receipt
        }

        catch (error) {
            console.log("error", error)
        }
    }