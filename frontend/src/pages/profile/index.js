import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function Profile(){
    const [ incidents, setIncidents ] = useState([]);
    
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
       
    }, [ongId]);

    async function handleDelete(id){
        try{
            await api.delete(`/incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            alert('Caso excluido com sucesso');

            setIncidents(incidents.filter( incident => incident.id !== id));

        }catch(err){
            alert(`Error ao deletar caso \n\n ${err}`);
        }
    }


    function handleLogout(){
        localStorage.clear();
        history.push('/');

    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Heroes"/>
                <span>Bem vindo a  
                    <strong style={{ color: '#e02041'}}> { ongName }</strong>
                </span>

                <Link className="button" to="incidents/new">
                    Cadastrar novo caso
                </Link>

                <button type="button" onClick={ handleLogout }>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                { incidents.map( (incident) => (
                    <li key={incident.id}>
                        <strong>CASOS: </strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={ () => handleDelete(incident.id)} type="button">
                            <FiTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))} 
            </ul>
        </div>
    )
};