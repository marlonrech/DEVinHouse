import logo from './logo.svg';
import './App.css';
import Post from './components/Ex 07 - Props, Fragment e PropTypes/Post'
import Titulo from './components/Ex 03 - Componentes/Titulo';
import BemVindo from './components/Ex 04 - Props/Props';
import Soma from './components/Ex 05 - Props/Soma';
import Botao from './components/Ex 06 - Props/Botao';
import ListaDeContatos from './components/Ex 08 - Lista de contatos/ListaDeContatos';
import ListaDeProdutos from './components/Ex 09 - Lista de produtos/ListaDeProdutos';
import RendCondicional from './components/Ex 10 - Renderização condicional/RendCondicional ';

function App() {
  const posts = [
    {
      id: 1,
      fotoPerfil: "https://cdn-icons-png.flaticon.com/512/848/848006.png",
      nomePerfil: "Silas Silva",
      dataPost: '12/10/2022',
      imagemPost: 'https://assets.unileversolutions.com/recipes-v2/230411.jpg',
      descricaoPost: "Do tamanho da sua fome",
      curtidoPor: 'Izabela Silva',
      qtdCurtidas: 10
    },
    {
      id: 2,
      fotoPerfil: "https://cdn-icons-png.flaticon.com/512/848/848006.png",
      nomePerfil: "Silas Silva",
      dataPost: '12/10/2022',
      imagemPost: 'https://assets.unileversolutions.com/recipes-v2/230411.jpg',
      descricaoPost: "Do tamanho da sua fome",
      curtidoPor: 'Izabela Silva',
      qtdCurtidas: 10
    }
  ]

  const contatos = [
    {
      id: 1,
      photo: 'https://www.computerhope.com/people/pictures/joe_belfiore.jpg',
      name: 'Joe belfiore',
      description: 'In a world for away'
    },
    {
      id: 2,
      photo: 'https://s2.glbimg.com/yLvFcp94rUgGK0dNHwi0XQqxAjs=/0x0:960x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2019/N/5/njIXAiRRKY9Qr74PRyOQ/20258236-10154756882766961-3434466954525858896-n.jpg',
      name: 'Bill Gates',
      description: "What I'm doing here?"
    },
    {
      id: 3,
      photo: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/04/mark-zuckerberg.jpg',
      name: 'Mark Zuckerberg',
      description: 'Really Busy, WhatsApp only'
    },
    {
      id: 4,
      photo: 'https://files.tecnoblog.net/wp-content/uploads/2013/03/marissa-mayer.jpg',
      name: 'Marissa Mayer',
      description: 'In a rush to catch a plane'
    },
    {
      id: 5,
      photo: 'https://cdn-3.expansion.mx/dims4/default/d5e5db9/2147483647/strip/true/crop/2800x2800+0+0/resize/600x600!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fdb%2F6b%2F67b2ee71493592911b4dc192edfa%2Fhi-res-1x1s-0015-sundar.max-2800x2800.jpg',
      name: 'Sundar Pichai',
      description: 'Do androids dream of electric sheep?'
    },
  ]

  const produtos = [
    {
      id: 1,
      photo: 'https://m.media-amazon.com/images/I/31RUD4pByJL.jpg',
      name: 'Missha All Araound Safe Block Segum Zero Sun',
      price: 4.00
    },
    {
      id: 2,
      photo: 'https://shopme365.com/image/cache/catalog/koreancosmetics/mokdon/green_tea_balancing_cream-500x500.jpg',
      name: 'Innisfree Green Tea Balancing Cream',
      price: 18.00
    },
    {
      id: 3,
      photo: 'https://m.media-amazon.com/images/I/617bfUtAUdL._AC_SX679_.jpg',
      name: "Claire's Cloud 9 Blanc De Whitening Cream",
      price: 20.00
    },
    {
      id: 4,
      photo: 'https://ae01.alicdn.com/kf/He7eaa049461a40d8af4e9c1ebd0525862/Tony-Moly-pure-eco-snail-Moisture-Gel-snail-gel.jpg',
      name: 'Tonymoly Pure Eco Snail Moisture Gel',
      price: 8.00
    },
    {
      id: 5,
      photo: 'https://skin79.net/zdjecia/2020/05/04/1003/54/SKIN79_Maska_w_Placie_Sluz_Slimaka_Fresh_Garden_Mask_Snail_23g-mini.jpg',
      name: 'Skin79 Fresh Garden Mask - Snail',
      price: 2.00
    },
    {
      id: 6,
      photo: 'https://images.tcdn.com.br/img/img_prod/776643/cosrx_advanced_snail_92_all_in_one_cream_100g_1031_1_94992849a05d4750da6f646707fe092c.jpeg',
      name: 'Cosrx Advanced Snail 92 All in One Cream',
      price: 24.00
    },
    {
      id: 7,
      photo: 'https://i.pinimg.com/originals/ac/b7/b4/acb7b4c2e5653392b430de2dbb1fa37f.jpg',
      name: 'Innisfree Canola Honey Mask',
      price: 14.00
    },
    {
      id: 8,
      photo: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/63/084/L_p0050108463.jpg',
      name: 'Scinic Honey Banana Cleansing Foam',
      price: 4.00
    },
  ]

  return (
// Ex 09 - Renderização Condicional
    <div className='produtosMain'>
    {produtos.map(produto =>{
      return (
        <RendCondicional 
          key={produto.id}
          photo={produto.photo}
          name={produto.name}
          price={produto.price.toFixed(2)}
        />
      )
    })}
    </div>

    // Ex 08 - Lista de Contatos
    // <div className='produtosMain'>
    //   {produtos.map(produto =>{
    //     return (
    //       <ListaDeProdutos 
    //         key={produto.id}
    //         photo={produto.photo}
    //         name={produto.name}
    //         price={produto.price}
    //       />
    //     )
    //   })}
    // </div>

    // Ex 08 - Lista de Contatos
    // <>
    //   {contatos.map(contato => {
    //     return (
    //       <ListaDeContatos
    //         key={contato.id}
    //         photo={contato.photo}
    //         name={contato.name}
    //         description={contato.description}
    //       />)
    //   })}
    // </>

    // Ex 07 - Props, Fragment e PropTypes
    // <>
    // {posts.map(post=>{
    //   return (
    //     <Post
    //     key={post.id}
    //     fotoPerfil={post.fotoPerfil}
    //     nomePerfil={post.nomePerfil}
    //     dataPost={post.dataPost}
    //     imagemPost={post.imagemPost}
    //     descricaoPost={post.descricaoPost}
    //     curtidoPor={post.curtidoPor}
    //     qtdCurtidas={post.qtdCurtidas}
    //     />)
    //   })}

    //   <Post />
    // </>

    // Ex 06 - Props
    // <Botao title='Eu sou um titulo estilizado com props.' background='blue' color='white'/>

    // Ex 05 - Props
    // <Soma num1={10} num2={25} />

    // Ex 04 - Props
    // <BemVindo nome='Silas Silva' idade={32} />

    // Ex 03 - Componetes
    // <Titulo titulo='Meu primeiro projeto React' texto='Criar um projeto React é muito fácil <3'/>

  );
}

export default App;