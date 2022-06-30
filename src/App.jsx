import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");


  const getJoke = () => {
    axios.get('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
      setSetup(response.data.setup)
      setDelivery(response.data.delivery)
    }).catch(error => {

    })
  }

  return (
    <div className="App">
      <h1>Setup: {setup}</h1>
      <h1>Delivery: {delivery}</h1>

      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;
