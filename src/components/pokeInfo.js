import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokeApi from '../services/pokeApi';

function PokeInfo() {
  const { pokeNumber } = useParams();
  const [pkmList, setPkmList] = useState({
    info: {
      types: []
    }
  });

  useEffect(() => {
    getPkm();
    console.log('UseEffect');
    // PokeApi.getPkm(pokeNumber).then(pkm => {
    //   setPkm({
    //     name: pkm.name,
    //     number: pokeNumber,
    //     info: {
    //       types: pkm.types,
    //       attack: pkm.attack,
    //       defense: pkm.defense,
    //       sp_atk: pkm.sp_atk,
    //       sp_def: pkm.sp_def,
    //       speed: pkm.speed
    //     }
    //   });
    // });
  }, [pokeNumber]);

  const getPkm = () => {
    if(PokeApi.pkmList.length){
      setPkm(PokeApi.pkmList);
    }else{
      PokeApi.listAll().then(list => setPkm(list));
    }
  };

  const setPkm = (list) => {
    let pkm = list.find(pkm => pkm.number === pokeNumber);
    if(pkm){
      PokeApi.getPkm(pkm).then(info => {
        pkm.info = info;
        setPkmList(pkm);
      });
    }
  };

  return (
    <div>
      <Link to='/' className='back-button'>&lt;</Link>

      <div className='poke-profile'>
        <div><strong>#{pkmList.number} - {pkmList.name}</strong></div>
        {pkmList.number && <img className='poke-sprite' src={`//serebii.net/sunmoon/pokemon/${pkmList.number}.png`} alt={pkmList.name} />}
      </div>

      <ul className='poke-types'>
        {pkmList.info.types.map(type => (
          <li key={type.name}>
            <img src={`//serebii.net/pokedex-bw/type/${type?.name}.gif`} alt={type.name} />
          </li>
        ))}
      </ul>

      <table>
        <thead>
          <tr>
            <td>Attack</td>
            <td>Defense</td>
            <td>Sp Atk</td>
            <td>Sp Def</td>
            <td>Speed</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pkmList.info.attack}</td>
            <td>{pkmList.info.defense}</td>
            <td>{pkmList.info.sp_atk}</td>
            <td>{pkmList.info.sp_def}</td>
            <td>{pkmList.info.speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PokeInfo;