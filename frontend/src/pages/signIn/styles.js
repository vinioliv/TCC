import styled from 'styled-components';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #F5F5F5;
`;
const ContainerForm = styled.View`
flex:2;
width:100%;
height: 10%;
`
const ContainerLogo = styled.View`
backgroundColor: #040404;
flex: 1;
width:100%;
height: 10%;
justifyContent: center; 
borderBottomLeftRadius: 40px;
borderBottomRightRadius: 40px;
marginBottom:10px;
`;

const Logo = styled.Image`   
  width:100%;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #FC6663;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 18px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  
`;

const SignUpLinkText2 = styled.Text`
  color: #FC6663;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLinkText1 = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, ContainerForm, ContainerLogo, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText2, SignUpLinkText1};