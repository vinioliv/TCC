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
} from 'react-native';
import styles, {colors} from '././../../assets/styles/index.style';
import {
  Container,
  ContainerConteudo,
  Panel,
  BannerTopImg,
  ContainerImg,
  Content,
  TituloSecao,
  VideoCardList,
  ContainerForm,
  ContainerLogo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText1,
  SignUpLinkText2,
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
              <Text>

                  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras varius convallis dui sit amet euismod. 
                Donec placerat rhoncus eros ac feugiat.
              </Text>
              <Text>


                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras varius convallis dui sit amet euismod. 
                Donec placerat rhoncus eros ac feugiat.
              </Text>
              <Text>


                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras varius convallis dui sit amet euismod. 
                Donec placerat rhoncus eros ac feugiat.
              </Text>
            </Content>
          </ContainerConteudo>
        </SafeAreaView>
      </Panel>
    </Container>
  );
}

Anuncio.navigationOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  title: 'REVIEWS',
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
 