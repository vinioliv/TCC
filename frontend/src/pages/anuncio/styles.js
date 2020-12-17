import styled from 'styled-components';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f5f6f8;
`;
const ContainerForm = styled.View`
  flex: 1;
  width: 100%;
  height: 10%;
`;
const ContainerConteudo = styled.View`
  align-items: center;
  background-color: #f5f6f8;
  padding-top: 10px;
`;
const Content = styled.View`
  align-items: center;
  background-color: #fff;
  width: 85%;
  padding: 8px;
  box-shadow: 10px 5px 1px black;
  border-radius: 8px;
`;

const ContainerImg = styled.View`
  align-items: center;
  background-color: #f5f6f8;
`;

const Panel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  background-color: #f5f6f8;
`;

const ContainerLogo = styled.View`
  flex: 1;
  width: 100%;
  height: 10%;
`;

const BannerTopImg = styled.Image`
  border-radius: 8px;
`;

const Input = styled.TextInput``;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
`;
const VideoCardList = styled.View`
  flex: 1;
  flex-direction: row;
`;

const TituloAnuncio = styled.Text`
  font-size: 14px;
  text-align: center;
  border-style: solid;
  border-bottom-color: #000;
  border-bottom-width: 1px;
  color: #515c6f;
  border-radius: 4px;
  margin-bottom:8px;
  padding-bottom:2px;
  margin-top: 8px;
`;

const TextoConteudo = styled.Text`
  font-size: 14px; 
  color: #515c6f;
  border-radius: 4px;
  padding: 2px;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height:18px;
`;

const SignUpLinkText1 = styled.Text`
  color: #999;
`;

export {
  TituloAnuncio,
  TextoConteudo,
  ContainerImg,
  Content,
  Container,
  BannerTopImg,
  Panel,
  ContainerForm,
  ContainerConteudo,
  ContainerLogo,
  VideoCardList,
  Input,
  SignUpLink,
  SignUpLinkText1,
};
