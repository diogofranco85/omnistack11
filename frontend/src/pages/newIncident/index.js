import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' 

import api from '../../services/api';

import './styles.css';

import Logo from '../../assets/logo.svg';




export default function Incidents(){

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const ong_id = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try{
           await api.post('/incidents', data, {
                headers:{
                    Authorization: ong_id,
                }
            })

        alert('Cadastrado com sucesso');

        history.push('/profile');

        }catch(err){
            alert(`erro ao incluir caso \n\n ${err}`);
        }
       
    }


    return (
        <div className="newincidents-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Heroes"/>
                
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolve isso.</p>

                        <Link to="/profile" className="back-link">
                            <FiArrowLeft size={16} color="#e02041" />
                            voltar para a home
                        </Link>
                    </section>
                    <form onSubmit={handleNewIncident}>
                        <input 
                            required={true}
                            placeholder="Título do caso"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <textarea
                            required={true} 
                            placeholder="Descrição" 
                            value={description}
                            onChange={e => setDescription(e.target.value) }/>

                        <input 
                            required={true}
                            placeholder="Valor em R$"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        
                        <button type="submit" className="button">Cadastrar</button>
                    </form>
                
            </div>
        </div>
    )

}