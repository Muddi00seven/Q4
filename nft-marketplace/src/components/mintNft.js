import React from 'react'
import { MintNftAsync } from '../store/asyncActions'
import { useStore } from '../context/GlobalState';
import './style.css'


const MintNft = () => {
    const [{ web3, accounts, contract }, dispatch] = useStore();

    const handleMint = async () => {
        try {
            await MintNftAsync(web3, contract, accounts)
        }
        catch (error) {

        }
    }
    return (
        <div className="mint-container">
            <div className="mint-inner-container">
                <button className="mint-btn" onClick={handleMint}>
                    Mint Your Nft
                </button>
            </div>
        </div>
    )
}

export default MintNft
