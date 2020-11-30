import styled from 'styled-components';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;
const ContainerForm = styled.View`
flex:1;
width:100%;
height: 10%;
`
const ContainerCategoria = styled.View`
 margin-left:16px;
 background-color:#fff;
 border-radius: 8px;
 width:78px;
 height:70px;
 justify-content:center; 
 align-items:center;  
`
const ContainerLogo = styled.View`
flex: 1;
width:100%;
height: 10%;
`;

const Logo = styled.Image`   
  width:50px;
  height:50px;
`;

const Input = styled.TextInput`
 
`;


const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  
`;
const VideoCardList = styled.View`
  flex:1;  
  flex-direction: row;
  
`;

const SignUpLinkText2 = styled.Text`
  color: #FC6663;
`;

const TituloSecao = styled.Text`
 font-size:12px;
 background-color: #FF6969;
 color:#FFF;
 border-radius:4px;
 padding:2px;
 margin-top:8px;

`;

const SignUpLinkText1 = styled.Text`
  color: #999;
`;

export { TituloSecao,Container, ContainerForm,ContainerCategoria, ContainerLogo, VideoCardList,Logo, Input, SignUpLink, SignUpLinkText2, SignUpLinkText1};