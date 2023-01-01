import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Site from '../site/site';
import Login from './login';
import Erro from '../site/erro';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='*' element={<Erro/>}/>
        <Route  path='/' element={<Site/>}/>
        <Route  path='/app' element={<Login />} />
      </Routes>
  </BrowserRouter>
  )

  // npx kill-port 3000 (deruba todos os aplicativos que estao usando a porta)
}

export default Rotas;