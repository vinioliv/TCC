import styled from 'styled-components';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;
const ContainerForm = styled.View`
flex:1;
width:100%;
height: 10%;
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

const SignUpLinkText1 = styled.Text`
  color: #999;
`;

export { Container, ContainerForm, ContainerLogo, VideoCardList,Logo, Input, SignUpLink, SignUpLinkText2, SignUpLinkText1};