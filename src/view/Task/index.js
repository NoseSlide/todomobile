import React, {useState} from 'react';
import {View,ScrollView,Image,Text,TextInput,KeyboardAvoidingView, TouchableOpacity,Switch} from 'react-native';

import styles from './styles'

//COMPONENTES

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons'
// import styles from '../../components/Header/styles';


export default function Task(){
    const[done,setDone]=useState(false);
    return(
        <KeyboardAvoidingView behavior='padding' style ={styles.container}>
            <Header showBack={true}/>
            <ScrollView style={{width:'100%'}}>                
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                    {
                        typeIcons.map(icon =>(
                            icon != null &&
                        <TouchableOpacity>
                            <Image source={icon}/>
                        </TouchableOpacity>
                        ))
                    }

                </ScrollView>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer"/>

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} placeholder="Detalhes da atividade que eu tenho de lembrar" multiline={true}/>
                

                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={()=>setDone(!done)} value={done} thumbColor={ done ? '#EE6B26': '#EE6B26'}/>
                            <Text style ={styles.switchLabel}>Concluido</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>Excluir</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer icon={'save'}/>
        </KeyboardAvoidingView>
    )

}
