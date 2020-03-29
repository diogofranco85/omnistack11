import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' 

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function Incidents(){
    return (
        <div className="newincidents-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Heroes"/>
                
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolve isso.</p>

                        <Link to="/" className="back-link">
                            <FiArrowLeft size={16} color="#e02041" />
                            voltar para a home
                        </Link>
                    </section>
                    <form>
                        <input placeholder="Nome da ONG"/>
                        <input type="email" placeholder="E-mail"/>
                        <input placeholder="Whatsapp"/>

                        <div className="input-group">
                            <input placeholder="Cidade"/>
                            <input placeholder="UF" style={{ width: 80 }}/>
                        </div>

                        <button type="submit" className="button">Cadastrar</button>
                    </form>
                
            </div>
        </div>
    )

}