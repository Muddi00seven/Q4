import { setupWeb3, setupContract, setupEthereumAccounts, setupAdopters } from './actions';
import Web3 from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contract/petShop'

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
            await getAdopters(contract, dispatch);
            //    dispatch(setupAdopters(adopters))
        }
    }
    catch (error) {
        console.log("error", error)
    }
}


export const getAdopters = async (contract, dispatch) => {
    try {
        let adopters = await contract.methods.getAdopters().call();
        console.log("adopters of getAdopter", adopters);
        dispatch(setupAdopters(adopters))

        return adopters;
    }
    catch (error) {
        console.log("error getAdopters", error)
    }
}


export const setAdopter = async (contract, accounts, id) => {
    try {
        let receipt = await contract.methods.adopt(id).send({
            from: accounts[0]
        });

        console.log("receipt of getAdopter", receipt);
    }
    catch (error) {
        console.log("error getAdopters", error)
    }
}