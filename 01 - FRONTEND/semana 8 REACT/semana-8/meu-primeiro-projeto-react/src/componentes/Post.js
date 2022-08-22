import PropTypes from 'prop-types'

export default function Post ({
   fotoPerfil, 
   nomePerfil, 
   dataPost, 
   imagemPost, 
   descricaoPost, 
   curtidoPor, 
   qntCurtidas
}) {
return (
   <div className="Post">

      <div className="Header">
         <div className="InformaçoesPessoais">
            <img src={fotoPerfil} className='ImagemDoPerfil'></img>
            
               <div>
                  <h4 className="NomePerfil">{nomePerfil}</h4>
                  <p className="">{dataPost}</p>
               </div>
         </div>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRp84APyYH4GQeG-dO-_N-4Ww8bq3Rq2TMn2MEtfGPObdvodpszTzssunXYXoNmTwCpU&usqp=CAU'></img>
      </div>
      
      <p>{descricaoPost}</p>
      <img className="FotoDoPost" src={imagemPost}></img>
      <div className="FooterUp">
         <div className="HeartComments">
            {qntCurtidas >= 1 ? (
               <img className="Heart" src="https://img.icons8.com/color/48/000000/hearts.png"></img>
            ) : (
               <img className="Heart" src="https://img.icons8.com/windows/32/FA5252/hearts.png"></img>
            )}
            
            <p>{qntCurtidas} comments</p>
         </div>
         <button>Share</button>
      </div>
      <p>Liked by {curtidoPor}</p>
   </div>

)
}

//Diz quais sao os tipo das props
Post.propTypes = {
   fotoPerfil: PropTypes.string,
   nomePerfil: PropTypes.string,
   dataPost: PropTypes.string,
   imagemPost: PropTypes.string, 
   descricaoPost: PropTypes.string, 
   curtidoPor: PropTypes.string, 
   qntCurtidas: PropTypes.number
}

// Definir padrao de entrada, caso nao tenha uma entrada do usuario
Post.defaultProps = {
   fotoPerfil: 'https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg',
   nomePerfil: '',
   dataPost: '',
   imagemPost: '',
   descricaoPost: '',
   curtidoPor: '',
   qntCurtidas: 0



}


















{/* <>
      <div className='post-header'>
         <img src={fotoUsuario} alt='foto de perfil' />
         <div className='text-content'>
            <h3>{nomeUsuario}</h3>
            <h5>{tempo}m</h5>
         </div>
      </div>

      <p>{texto}</p>

      <img src={img} alt='imagem do post' />

      <div className='image-footer'>
         <i></i>
         <span>comments</span>
         <span>
            <a href={compartilhar}> Share </a>
         </span>

      </div>

      <p>Like by {curtidoPor}</p>
   </> */}
