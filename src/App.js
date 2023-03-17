import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pokeball from './pokeball.svg';
import './App.css';

import PokeList from './components/pokeList';
import { useState } from 'react';
import PokeInfo from './components/pokeInfo';

function App() {
  const [filter, setFilter] = useState('');

  const filtering = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className='App'>
      <img className='pokeball-back' id='pokeballBack' src={Pokeball} alt='pokeballBack' />
      <input type='text' id='pokeFilter' placeholder='Search' onKeyUp={filtering} />

      <Router>
        <Routes>
          <Route exac path='/' element={<PokeList filter={filter} />} />
          <Route exac path='/:pokeNumber' element={<PokeInfo />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
