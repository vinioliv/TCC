import styled from 'styled-components';
 
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color:#F5F6F8;
`;
const ContainerForm = styled.View`
flex:1;
width:100%;
height: 10%;
`;
const ContainerConteudo = styled.View` 
 align-items: center;
 background-color: #F5F6F8;
 padding-top:10px; 
`;
const Content = styled.View` 
 align-items: center;
 background-color: #FFF; 
 width:85%;
 padding:8px;
 box-shadow: 10px 5px 1px black;
 border-radius:8px;
  
`;

const ContainerImg = styled.View`  
 align-items: center;
 background-color:#F5F6F8;
 
`;

const Panel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;  
  background-color:#F5F6F8; 
`;


const ContainerLogo = styled.View`
flex: 1;
width:100%;
height: 10%;
`;

const BannerTopImg = styled.Image`   
  border-radius:8px;
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

export { TituloSecao,ContainerImg, Content ,Container, BannerTopImg, Panel, ContainerForm, ContainerConteudo, ContainerLogo, VideoCardList, Input, SignUpLink, SignUpLinkText2, SignUpLinkText1 };