import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
//import Home from './pages/home'
import MovieDetails from './components/movie details/moviedetails';
import Movies from './components/Filme/index';
//import About from './pages/about'
//import Planos from './pages/planos'
//import Detalhes from './pages/detalhes'
import Footer from './components/Footer/index'
//import Erro from './pages/erro'
import Cadastro from './pages/cadastro'

export default function App() {
    const [exibirBotaoCadastrar, setExibirBotaoCadastrar] = useState(true);

    function handleCadastrarClick() {
        setExibirBotaoCadastrar(false);
    }
    function handleCadastrarClick2() {
        setExibirBotaoCadastrar(true);
    }

    return (

        <Router>
            <div className="container">
                <header className="p-3 bg-dark text-white">
                    <div className="container">

                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto  mb-2 justify-content-center mb-md-0">
                                <li><Link className="nav-link px-2 text-white" to='/' onClick={handleCadastrarClick2}>Home</Link></li>
                            </ul>
                            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0 me-0 ms-auto">
                                {exibirBotaoCadastrar && <li><Link className="nav-link px-2 text-white" to='/cadastro' onClick={handleCadastrarClick}>Cadastrar</Link></li>}
                            </ul>
                        </div>
                    </div>
                </header>

            </div>
            <div className="App">
                <Routes>
                    <Route path='/cadastro' element={<Cadastro setExibirBotaoCadastrar={setExibirBotaoCadastrar} />} />
                    <Route path='/' element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes >
            </div>
            <Footer />
        </Router>



    )
}