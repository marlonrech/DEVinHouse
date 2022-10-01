import { useState, useEffect } from 'react';

const usuariosApi = [
  {
    id: 1,
    nome: 'josé',
    mensagem: 'ultima mensagem 1',
  },
  {
    id: 2,
    nome: 'joão',
    mensagem: 'ultima mensagem 2',
  },
  {
    id: 3,
    nome: 'pedro',
    mensagem: 'ultima mensagem 3',
  },
  {
    id: 4,
    nome: 'artur',
    mensagem: 'ultima mensagem 4',
  },
];

let contador = 4;

const ListaDeContatos = () => {
  const [usuarios, setUsuarios] = useState(usuariosApi);

  const adicionarUsuarios = () => {
    contador++;

    let novoUsuario = {
      id: contador,
      nome: `usuario ${contador}`,
      mensagem: `ultima mensagem ${contador}`,
    };

    return setUsuarios((prevUsuarios) => [...prevUsuarios, novoUsuario]);
  };

  return (
    <>
      <ul style={{ textAlign: 'left' }}>
        <button onClick={adicionarUsuarios}>Nova mensagem</button>
        {usuarios.map((usuario) => {
          const { id, nome, mensagem } = usuario;
          return (
            <li key={id} style={{ display: 'flex' }}>
              <img
                src="#"
                alt=""
                style={{ marginRight: '20px', borderRadius: '50%' }}
              />
              <div>
                <h3>{nome}</h3>
                <p>{mensagem}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListaDeContatos;
