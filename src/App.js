import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pokeball from './pokeball.svg';
import './App.css';

import PokeList from './components/pokeList';
import { useEffect, useState } from 'react';
import PokeInfo from './components/pokeInfo';

function App() {
  const [filter, setFilter] = useState('');

  const onFilter = (event) => {
    const value = (event.target.value).toLowerCase();
    setFilter(value);
  }

  useEffect(() => {
    const pokeballBack = document.querySelector('#pokeballBack');

    window.onscroll = () => {
      const rotation = `translateY(-50%) rotateZ(${window.scrollY / 5}deg)`;
      pokeballBack.style.transform = rotation;
    }
  });

  return (
    <div className='App'>
      <img className='pokeball-back' id='pokeballBack' src={Pokeball} alt='pokeballBack' />
      <input type='search' id='pokeFilter' placeholder='Search' onKeyUp={onFilter} />

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
