import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';

import back from '../../images/back.png';
import continueI from '../../images/continue.png';
import imagemodel from '../../images/imagemodel.png';
import addprodservices from '../../images/addprod_services.png';



import styles from './style';

export default function Adress() {
  return (
    <ScrollView>
      <View style={styles.container}>


    
        <View style={styles.registerSection}>
          <Image source={back} style={styles.backImagem} />

          <Text style={styles.textRegister}>Complemento de Cadastro</Text>
          <Text style={styles.textGeneral}>
            Adicione seus Produtos ou Serviços
          </Text>
          <Image source={imagemodel} style={styles.imagemodel} />

          <Text style={styles.textGeneral}>Descreva o produto ou serviço</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="#BDC4CC"></TextInput>

          <Text style={styles.textGeneral}>Informe um valor mínimo</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="#BDC4CC"></TextInput>

          <Text style={styles.textGeneral}>
            Classifique seu produto dentro das nossas categorias
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="#BDC4CC"></TextInput>

          <Text style={styles.textGeneral}>
            Não encontrou sua categoria? Informe abaixo a categoria em que seu
            produto ou serviço melhor se encaixa
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="#BDC4CC"></TextInput>

          <Image source={addprodservices} style={styles.addprodservices} />
          <Image source={continueI} style={styles.continueImage} />
      
        </View>
 

      </View>
      </ScrollView>
  );
}
