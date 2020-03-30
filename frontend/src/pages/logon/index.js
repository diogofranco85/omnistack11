import React, { useState} from 'react';
import { FiLogIn } from 'react-icons/fi' 
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import Logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    const history = useHistory();
    const [id, setId ] = useState(""); 

    async function handleLogin(e){
      e.preventDefault();

      try{

        const response = await api.post('/session', { ong_id: id })

        console.log(response.data);

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name)

        history.push('/profile');

      }catch(err){
          alert('Falha no login');
      }

    }

    return (
      <div className="logon-container">
          <section className="form">
            <img src={Logo} alt="Be The Heroes"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID" 
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
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