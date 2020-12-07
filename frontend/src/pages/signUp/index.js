import React from 'react';
import {Text, View, Image} from 'react-native';
import backLogin from '../../images/backtologin.png';
import {TextInput} from 'react-native-gesture-handler';

import continueI from '../../images/continue.png';
import styles from './styles';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.textHeader}>iMarket</Text>
      </View>
      <Image source={backLogin} style={styles.backLogin} />

      <View style={styles.registerSection}>
        <Text style={styles.textRegister}>Área de Cadastro</Text>

        <Text style={styles.textRegisterInput}>Informe um nome de usuário</Text>
        <TextInput
          underlineColorAndroid="black"
          style={styles.input}></TextInput>

        <Text style={styles.textRegisterInput}>Informe um e-mail válido</Text>
        <TextInput
          underlineColorAndroid="black"
          style={styles.input}></TextInput>

        <Text style={styles.textRegisterInput}>Informe uma senha</Text>
        <TextInput
          secureTextEntry={true}
          underlineColorAndroid="black"
          style={styles.input}></TextInput>

        <Text style={styles.textRegisterInput}>Confirme a senha informada</Text>
        <TextInput
          secureTextEntry={true}
          underlineColorAndroid="black"
          style={styles.input}></TextInput>

        <Image source={continueI} style={styles.continueImage} />
      </View>
    </View>
  );
}
