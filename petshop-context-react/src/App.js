import React, { useState } from 'react';
import { useStore } from './context/GlobalState';
import './App.css'
import { petsData } from './data';
import { setAdopter, getAdopters } from './store/asyncActions';
function App() {
  const [{ web3, accounts, contract, adopters }, dispatch] = useStore();
  // console.log("web3",web3)
  // console.log("accounts",accounts)
  // console.log("contract",contract)
  console.log("adopters in APP", adopters)
  const emptyAddress = "0x0000000000000000000000000000000000000000";

  const handleSetAdopter = async (id) => {
    try {
      let receipt = await setAdopter(contract, accounts, id);
      console.log("handle adopt receipt", receipt)
      await getAdopters(contract, dispatch);
    }
    catch (error) {
      console.log("handle pet error", error)
    }
  }

  return (
    <div className="App">
      <div className="pet-heading-container">
        <h1>
          Petshop
      </h1>
      </div>
      <div class="row">
        {
          adopters ?
            petsData.map((data, index) => (
              <div class="column">
                <div class="card">
                  <img src={data.picture} className="pet-img-size" />
                  <h3>{data.name}</h3>
                  <p>Age: {data.age}</p>
                  <p>Breed: {data.breed}</p>
                  <p>Location: {data.location}</p>
                  {
                    adopters[index] == emptyAddress ?
                      <button onClick={() => handleSetAdopter(index)} className="pet-btn">
                        Adopt
                    </button>
                      :
                      "Adopted"
                  }
                </div>
              </div>
            ))
            :
            ""
        }
      </div>
    </div>
  );
}

export default App;
