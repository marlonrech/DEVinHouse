import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import PaginaWeb from '../../exercícios/PaginaWeb/PaginaWeb';
import Home from '../Formularios/Home';
import Login from '../Formularios/Login';
import NotFound from '../Formularios/NotFound';


export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route element={<RotaPrivada />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Route> */}
  
          <Route path="/login" element={<Login />} />
          <Route path="/entrar" element={<Navigate replace to="/login" />} />

          <Route path='/home' element={<PaginaWeb />}/>
          <Route path='/' element={<Navigate replace to='/home'/>} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }