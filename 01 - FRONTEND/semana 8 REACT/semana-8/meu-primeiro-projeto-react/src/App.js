import './App.css';
import Titulo from './componentes/Titulo.js';
import Texto from './componentes/Texto.js';
import Soma from './componentes/Soma.js';
import FilhoComSoma from './componentes/FilhoComSoma.js';
import Post from './componentes/Post';
import Botao from './componentes/Botao';

function App() {
const posts = [
  {
    id: 1,
    fotoPerfil: 'https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg',
    nomePerfil: 'Thiago Silva',
    dataPost: '12/10/2022',
    imagemPost: 'https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-mobile.jpg',
    descricaoPost: 'Do tamanho da sua fome',
    curtidoPor: 'Bianka Cristina',
    qntCurtidas: 10
  },
  {
    id: 2,
    fotoPerfil: 'https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg',
    nomePerfil: 'Bianka Cristina',
    dataPost: '12/10/2022',
    imagemPost: 'https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-mobile.jpg',
    descricaoPost: 'Do tamanho da sua fome',
    curtidoPor: 'Marlon',
    qntCurtidas: 10
  }
]


  return (
    <> {/* DEIXAR FECHADO FRAGMENTO PARA EVITAR CRIAR ELEMENTOS DESNECESSARIOS */}

         {/* <Titulo />     {/*{Exercicio 3} */}
        {/* <Texto />       {Exercicio 3} */}

        {/* <Soma num1={40} num2={10} />      {Exercicio 5} */}

        {/* <Botao corDeFundo='red' > Botao 1</Botao> */}

        {/* <FilhoComSoma num1={5} num2={20} />   {Exercicio 13} */}


        {/* CRIANDO CONST POSTS LA NA LINHA 10 E NA LINHA DE BAIXO DESSE COMENTARIO FAZENDO .MAP PARA CADA UM CRIADO */}
      {posts.map(post => {
        return (
          <Post 
          key={post.id}
          fotoPerfil={post.fotoPerfil}
          nomePerfil={post.nomePerfil}
          dataPost={post.dataPost}
          imagemPost={post.imagemPost}
          descricaoPost={post.descricaoPost}
          curtidoPor={post.curtidoPor}
          qntCurtidas={post.qntCurtidas}
        />
        )
      })}
      <Post 
        fotoPerfil='https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg'
        nomePerfil='Thiago Silva'
        dataPost='12/10/2022'
        imagemPost='https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-mobile.jpg'
        descricaoPost='Do tamanho da sua fome'
        curtidoPor='Bianka Cristina'
        qntCurtidas={10}
      />

     </>




  );
}

export default App;
