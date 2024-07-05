// import 'react-toastify/dist/ReactToastify.css';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
// import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
// import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
// import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {

  return (
    <>
    <Navbar />
    <Home/>
      {/* <BrowserRouter>
        
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        
      </BrowserRouter>*/}
      <Footer /> 
    </>
  )
}

export default App
