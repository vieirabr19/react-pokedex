import { useNavigate, Link } from 'react-router-dom';

function PokeListItem({pkm}){
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${pkm.number}`);
  };

  return (
    <li className='poke-list-item'>
      <Link to={`/${pkm.number}`}>
        <img src={`//serebii.net/pokedex-xy/icon/${pkm.number}.png`} alt={pkm.name} />
        <span>{pkm.number} - {pkm.name}</span>
      </Link>
    </li>
  );
}

export default PokeListItem;