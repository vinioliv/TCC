import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import registerProductService from '../registerProductService/index'



import back from '../../images/back.png';
import continueI from '../../images/continue.png';

import styles from './styles';

export default function Adress() {
  
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={back} style={styles.backImagem} />

        <View style={styles.registerSection}>
          <Text style={styles.textRegister}>Complemento de Cadastro</Text>
          <Text style={styles.textGeneral}>
            Gostaria de cadastrar um e-mail secundário para receber notificações
            sobre as interações dos seus clientes?
          </Text>
          <TextInput style={styles.input} underlineColorAndroid="#BDC4CC">
            email_comercial@123.com
          </TextInput>

          <Text style={styles.textGeneral}>
            Informe um telefone de contato para que seus clientes possam ligar
            para você, pode ser celular ou fixo
          </Text>
          <TextInput style={styles.input} underlineColorAndroid="#BDC4CC">
            (13) 90000-0000
          </TextInput>

          <Text style={styles.textGeneral}>
            Informe o seu endereço comercial
          </Text>
          <TextInput style={styles.input} underlineColorAndroid="#BDC4CC">
            Rua xyz
          </TextInput>

        <TouchableOpacity
  
        >
          <Image source={continueI} style={styles.continueImage} />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
