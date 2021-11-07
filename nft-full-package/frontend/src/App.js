import logo from './logo.svg';
import './App.css';
import { useStore } from './context/GlobalState'
import { mintNftAsync } from './store/asyncActions'
function App() {
  const [{ web3, accounts, contract }, dispatch] = useStore();
  const handleMint = async () => {
    try {
      await mintNftAsync(contract, accounts)
    }
    catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div className="App">
      <button onClick={handleMint}>
        mint Nft
    </button>
    </div>
  );
}

export default App;
