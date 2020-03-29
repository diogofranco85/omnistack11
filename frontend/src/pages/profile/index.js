import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Heroes"/>
                <span>Bem vindo a ONG</span>

                <Link className="button" to="incidents/new">
                    Cadastrar novo caso
                </Link>

                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASOS: </strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>
        
                <li>
                    <strong>CASOS: </strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>
            
                <li>
                    <strong>CASOS: </strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>
           
                <li>
                    <strong>CASOS: </strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
};