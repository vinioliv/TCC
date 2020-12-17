import React from 'react';
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
} from 'react-native';
import styles, {colors} from '././../../assets/styles/index.style';
import {
  Container,
  ContainerConteudo,
  Panel,
  BannerTopImg,
  ContainerImg,
  Content,
  BotaoPedido,
  TextoBotaoPedido,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import bannerTop from '../../images/anuncio.png';

export default function Anuncio() {
  return (
    <Container>
      <Panel>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <StatusBar
              translucent={true}
              backgroundColor={'rgba(0, 0, 0, 0.3)'}
              barStyle={'light-content'}
            />
          </View>

          <ContainerImg>
            <BannerTopImg source={bannerTop} resizeMode="stretch" />
          </ContainerImg>
          <ContainerConteudo>
            <Content>
              <TouchableHighlight
               onPress={() => { alert(`Clique em Transporte para shows e eventos'`); }}
                style={{
                  height: 40,
                  width: 260,
                  borderRadius: 24,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  marginLeft: 50,
                  marginRight: 50,
                  elevation: 2,
                  marginBottom:16,
                  marginTop:16

                  
                }}>
                <TextoBotaoPedido>
                  Transporte para shows e eventos
                  <Feather color="#F01" size={25} name="chevron-right" />
                </TextoBotaoPedido>
              </TouchableHighlight>
              <TouchableHighlight
               onPress={() => { alert(`Clique em Transporte para shows e eventos'`); }}
                style={{
                  height: 40,
                  width: 260,
                  borderRadius: 24,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  marginLeft: 50,
                  marginRight: 50,
                  elevation: 2,
                  marginBottom:16,
                }}>
                <TextoBotaoPedido>
                  Transporte para shows e eventos
                  <Feather color="#F01" size={25} name="chevron-right" />
                </TextoBotaoPedido>
              </TouchableHighlight>
              <TouchableHighlight
               onPress={() => { alert(`Clique em Transporte para shows e eventos'`); }}
                style={{
                  height: 40,
                  width: 260,
                  borderRadius: 24,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  marginLeft: 50,
                  marginRight: 50,
                  elevation: 2,
                  marginBottom:16,
                }}>
                <TextoBotaoPedido>
                  Transporte para shows e eventos
                  <Feather color="#F01" size={25} name="chevron-right" />
                </TextoBotaoPedido>
              </TouchableHighlight>
            </Content>
          </ContainerConteudo>
        </SafeAreaView>
      </Panel>
    </Container>
  );
}

Anuncio.navigationOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  title: 'SERVIÇOS',
  headerTitleAlign: 'right',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },

  headerLeft: () => (
    <TouchableHighlight onPress={() => navigation.goBack()}>
      <Feather color="#F01" size={35} name="chevron-left" />
    </TouchableHighlight>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 16}}>
      <Feather color="#F01" size={15} name="star" />
      <Feather color="#F01" size={15} name="star" />
      <Feather color="#F01" size={15} name="star" />
      <Feather color="#F01" size={15} name="star" />
      <Feather color="#707070" size={15} name="star" />
    </View>
  ),
});
