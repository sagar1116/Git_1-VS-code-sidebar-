import { useState } from 'react';
import './App.css';
import explorer from './Data.js';
import Folder from './components/Folder.js';

function App() {
  const [explorerData,setexplorerData]=useState(explorer);
  //console.log(explorerData);

  return (
    <div className="App">
      <Folder explorer={explorerData}/> 
      
    </div>
  );
} 
export default App;
