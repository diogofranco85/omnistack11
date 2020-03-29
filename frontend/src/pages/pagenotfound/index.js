import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function pagenotfound(){
    return (
       <div className="notfound-container">
           <img src={Logo} alt="Be the Heroes"/>
           <h1>Página solicitada não foi encontrada</h1>
           <p>A página requisitida não pode ser encontrada. qualquer dúvida entre em contato com o administrador</p>

           <Link to="/" class="button" style={{ width: 200}}>
               <FiHome size={18} color="#fff"/>
               Página Inicial
           </Link>
       </div>
    )

}