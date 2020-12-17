import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import {
  Container,
  ContainerForm,
  ContainerLogo,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText1,
  SignUpLinkText2,
} from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: 'mail@gmail.com',
    password: '123456',
    error: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SingUp');
  };
  // handleSignInPress  = () =>{
  //   this.props.navigation.navigate('HomeScreen');
  // }
  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      
      try {
        // const response = await api.post('/sessions', {
        //   email: this.state.email,
        //   password: this.state.password,
        // });

        if(this.state.email!="mail@gmail.com"){
          this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
        }else{
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'HomeScreen'  }),
              // NavigationActions.navigate({ routeName: 'HomeScreen', params: { token: response.data.token } }),
            ],
          });
          this.props.navigation.dispatch(resetAction);
        }

        
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <ContainerLogo>
          <Logo source={require('../../images/imarketbranco.png')}/>
        </ContainerLogo> 
        <ContainerForm>
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
            
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button onPress={this.handleSignInPress}>
          <ButtonText>Acessar</ButtonText>
        </Button>
        <SignUpLinkText1>Ainda não tem uma conta?</SignUpLinkText1>
        <SignUpLink onPress={this.handleCreateAccountPress}>          
          <SignUpLinkText2>Cadastre-se clicando aqui</SignUpLinkText2>
        </SignUpLink>
        </ContainerForm>   
      </Container>
    );
  }
}