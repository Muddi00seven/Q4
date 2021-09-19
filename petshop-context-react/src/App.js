import React,{useState} from 'react';
import {useStore} from './context/GlobalState';

function App() {
  const [{web3,accounts,contract,adopters},dispatch] = useStore();
  
  // console.log("web3",web3)
  // console.log("accounts",accounts)
  // console.log("contract",contract)
  // console.log("adopters in APP",adopters)

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
