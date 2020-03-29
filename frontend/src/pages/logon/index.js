import React from 'react';
import { FiLogIn } from 'react-icons/fi' 
import { Link } from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    return (
      <div className="logon-container">
          <section className="form">
            <img src={Logo} alt="Be The Heroes"/>

            <form>
                <h1>Faça seu logo</h1>

                <input placeholder="Sua ID" />
                <button className="button" type="submit">Entrar</button>

                <Link to="/register" alt="">
                    <FiLogIn size={16} color="#e02041"/> 
                    Não tenho cadastro
                </Link>
            </form>
          </section>
          <img src={heroesImg} alt="Be The Heroes"/>
      </div>  
    )
}