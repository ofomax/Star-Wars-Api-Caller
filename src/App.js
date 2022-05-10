import './App.css';
import{
  
  Routes as Switch,
  Link,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Planets from './components/Planets';
import axios from 'axios';
import View from './components/View';
import { useNavigate } from "react-router";
import Main from './components/Main';





function App() {

  
 
  return (
    
    <div className="App">
      <header className="App-header">
        
        <Switch>
            <Route path="/"element={<Main/>}/>
            <Route path="/people/:id" element={<View/>} />
            <Route path="/planets/:loc" element={<Planets/>} />
        </Switch>
      </header>
    </div>

    
  );
}

export default App;
