import React from 'react';
import './App.css';
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0');

function App() {
  const [fileUrl, setFileUrl] = React.useState();
  console.log("client", client)
  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const added = await client.add(file);
      console.log("added", added)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url);
      console.log("url", url)
    }
    catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div className="App">
      <h1>
        IPFS FILE UPLOAD APP
    </h1>
      <input onChange={handleFileUpload} type="file" />
      <br />
      {
        fileUrl ?
          <img src={fileUrl} width="500" /> :
          ""
      }
  
    </div>
  );
}

export default App;
