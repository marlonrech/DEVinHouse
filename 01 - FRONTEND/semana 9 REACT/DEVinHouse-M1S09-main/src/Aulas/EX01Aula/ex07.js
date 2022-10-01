import React, { useEffect, useState } from 'react';

const SimularBarraDeDownload = () => {
  const [pesquisa, setPesquisa] = useState('yan');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${pesquisa}`)
      .then((response) => response.json())
      .then((users) => {
        console.log('- recebeu a resposta -');
        console.log(users);

        setLista(users.items);
      });
  }, [pesquisa]);

  return (
    <>
      <h1>usuarios gitHub</h1>
      <input
        type="text"
        onChange={(e) => {
          setPesquisa(e.target.value);
          console.log(pesquisa);
        }}
      />

      {lista.map((item) => {
        const { avatar_url, login, url } = item;
        return (
          <div style={{ display: 'flex' }}>
            <img src={avatar_url} alt={login} style={{ width: '80px' }} />
            <div>
              <h1>{login}</h1>
              <p>{url}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SimularBarraDeDownload;
