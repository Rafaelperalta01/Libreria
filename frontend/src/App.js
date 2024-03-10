import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import Notfound from './pages/notfound';
import Favoritos from './pages/favoritos';
import Verdetalles from './pages/verdetalles';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/dashboard/favoritos' Component={Favoritos} />
          <Route path='/dashboard/VerDetalles/:id' Component={Verdetalles} />
          <Route path='/*' Component={Notfound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;