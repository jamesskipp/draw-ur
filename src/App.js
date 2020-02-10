import React from 'react';
import './App.css';
import Drawings from './components/Drawings';

function App() {

   return (
      <div className="App" style={{ height: '100%' }}>
         <div className="container" style={{ height: '100%' }}>
            <Drawings></Drawings>
         </div>
      </div>
   );
}

export default App;