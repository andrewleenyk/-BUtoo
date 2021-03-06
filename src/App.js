import Home from './Components/Home.js'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Share from './Components/Share.js'
import SurvivorSupport from './Components/SurvivorSupport.js'
import Why from './Components/Why.js'
import { compose } from '@mui/system';

import axios from "axios";
import { useEffect, useState } from 'react';
import Petition from './Components/Petition.js'
import Prevention from './Components/Prevention.js'


const API_KEY = 'keyN5KW3EITtcAGls'
const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`

function App() {

  const [toggleFetch,setToggleFetch] = useState(true)
  const [responses, setResponses] = useState([]);
  

  useEffect(() => {
      console.log('getting responses');
      const getResponses = async () => {
          const resp = await axios.get(API_URL);
          console.log(resp.data.records);
          setResponses(resp.data.records);
      }

      getResponses();
      console.log(responses)

  },[toggleFetch])
  

  return (
    <div>
      <nav>
      <label id="hamburger" for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
        <div className="nav-links">
          <Link to="/why">
            <a className="nav-link">Why</a>
          </Link>

          <Link to="/survivor-support">
            <a className="nav-link">Survivor Support</a>
          </Link>

          <Link to="/prevention">
            <a className="nav-link">Prevention</a>
          </Link>
          
          <Link to="/share-your-story">
            <a className="nav-link">Share</a>
          </Link>
          <Link to="/sign-the-petition">
            <a className="nav-link">Petition</a>
          </Link>
        </div>
        <div className="home-icon">
          <Link to="/" className="title" exact>
              <h1 id="title">#BUtoo</h1>
              <h5 id="subtitle">Sexual assault happens at Boston University. <br/> Let's make our community safer.</h5>
          </Link>
        </div>
      </nav>
      

      <section className="app-section">
        <Route path="/" exact>
          <Home 
            responses={responses}
          />
        </Route>


        <Route path="/why">
          <Why />
        </Route>

        <Route path="/survivor-support">
          <SurvivorSupport />
        </Route>

        <Route path="/prevention">
          <Prevention />
        </Route>

        <Route path="/share-your-story">
          <Share 
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/sign-the-petition">
          <Petition />
        </Route>        
      </section>

    </div>
  );
}

export default App;
