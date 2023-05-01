import React from 'react';
import { useParams } from 'react-router-dom';
import "../components/estilos gerais/Geral.css";
export default function Erro() {
    return (
        <div class="grande">
            <h1>Página não encontrada</h1>
            <a href='/'><button type="button" className="btn btn-outline-light me-2">Voltar a Home</button></a>
        </div>

    )

}