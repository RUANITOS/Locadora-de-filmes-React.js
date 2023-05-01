import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';
import "../components/estilos gerais/Geral.css";
export default function About() {
    const { name } = useParams();



    return (
        <div class="grande">
            <h1>Olá usuario {name}!</h1>
            
        </div>
    )
}