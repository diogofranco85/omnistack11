import React from 'react';
import { Image, View, Text, TouchableOpacity, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

import Logo from '../../assets/logo.png';

import styles from './styles';

export default function Details(){

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const message = `Ola ${incident.name} gostaria de ajudar no caso ${incident.title} com o valor de ${
        Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'})
        .format(incident.value) 
    }`;
    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: incident.title,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
               

               <TouchableOpacity
                onPress={ navigateBack }
                >
                    <Feather name="arrow-left" size={28} color="#e82041"/>
                </TouchableOpacity>
            </View>

                <View style={styles.incidentItem}>
                    <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CAUSA</Text>
                    <Text style={[styles.incidentValue, { fontWeight:'700'}]}>{incident.title}</Text>
                    <Text style={[styles.incidentValue, { marginTop: 0}]}>{incident.description}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia</Text>
                    <Text style={styles.heroTitle}>Seja o super herói desse caso</Text>

                    <Text style={styles.heroDescription}>Entre em contato</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={ sendWhatsapp } style={styles.action}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ sendMail } style={styles.action}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
        </View>
    )
}