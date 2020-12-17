import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import backLogin from '../../images/backtologin.png';
import { TextInput } from 'react-native-gesture-handler';
import {

  TouchableHighlight,
} from 'react-native';
import continueI from '../../images/continue.png';
import styles from './styles';

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.textHeader}>iMarket</Text>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Image source={backLogin} style={styles.backLogin} />
        </TouchableHighlight>
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
            <TouchableHighlight style={
              {paddingBottom:20,}
            } onPress={() =>  this.props.navigation.navigate('HomeScreen')}>
              <Image source={continueI} style={styles.continueImage} />
            </TouchableHighlight>
         
        </View>
      </View>
    );
  }
}
