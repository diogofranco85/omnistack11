import React, { useState, useEffect } from 'react';
import {  View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Incidents(){
    const [ incidents, setIncidents ] = useState([]);
    const [ total, setTotal] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ page, setPage ] = useState(1);

    const navigation = useNavigation();
    

    function navigateToDetail( incident ){
        navigation.navigate('Details', { incident });
    }

    async function loadIncidents(){
       
        if(loading){
            return;
        }

        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents',{
            param:{ page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);

        console.log(incidents);
    
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View> 

            <Text style={styles.title}>Seja bem vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList 
                style={styles.incidentsList}
                data={incidents}
                keyExtractor ={ incident => String(incident.id)}
                renderItem={ ( { item: incident }) =>(

                   
                    <View style={styles.incidentItem}>
                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>Casos</Text>
                        <Text style={[styles.incidentValue, { marginBottom: 0, fontWeight:'700'}]}>{incident.title}</Text>
                        <Text style={[styles.incidentValue, { marginTop: 0}]}>{incident.description}</Text>


                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                        <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={ () => navigateToDetail(incident) }
                        >
                            <Text style={styles.detailsButtonText}>Mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>

                )}

            />            
        </View>
    )
}