import { useEffect, useState } from 'react';

import PokeListItem from './pokeListItem';
import PokeApi from '../services/pokeApi';

function PokeList({filter}){
  const [pkmList, setPkmList] = useState([]);

  useEffect(() => {
    if(!PokeApi.pkmList.length > 0){
      PokeApi.listAll().then(list => setPkmList(list));
      console.log('Acessando API');
    }else{
      setPkmList(PokeApi.pkmList);
      console.log('Acessando PKM LIST');
    }
  }, []);

  return (
    <ul className='poke-list'>
      {
        pkmList
        .filter(pkm => pkm.name.indexOf(filter) !== -1)
        .map(pkm => <PokeListItem pkm={pkm} key={pkm.number} />)
      }
    </ul>
  );
}

export default PokeList;