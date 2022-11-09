import React from 'react';
import { ItemContainer, ItemHr, ItemText } from './style';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer key={repo.id} onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <ItemHr />
        <ItemText>{repo.description}</ItemText>
        <ItemHr />
        <a href={repo.html_url} target="_blank" rel="noreferrer" >Ver Repositório</a><br/><br />
        <a  className='remove'>Remover</a>
        <hr />
    </ItemContainer>
  );
}

export default ItemRepo