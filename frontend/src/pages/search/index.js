import React, {Component} from 'react';
import {
  Text,
  Platform,
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
 

import {TextInput} from 'react-native-gesture-handler';

import Star from 'react-native-star-view';
import PropTypes from 'prop-types';
import styles from './styles';
import adImg from '../../images/anuncios/anuncio-transporte.png';
import adImg2 from '../../images/anuncios/anuncio-manutencao1.jpg';
import clickDetail from '../../images/clicktoaccess.png';
export default class Search extends Component {
  state = {
    search: '',
  };
  filterList(list) {
    let aux = list.filter(
      listItem =>
        listItem.anunciante
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        listItem.categoria
          .toLowerCase()
          .includes(this.state.search.toLowerCase()),
    );

    if (aux) {
      return aux;
    } else {
      return;
    }
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  // <FlatList

  //   style={styles.articleContainer}
  //   keyExtractor={ad => String(ad)}
  //   renderItem={() => (
  //     <View style={styles.adContainer}>
  //       <Image style={styles.adImg} source={adImg} />
  //       <Image
  //         style={styles.moreDetail}
  //         source={clickDetail}
  //         resizeMode="stretch"
  //       />
  //       <View style={styles.adInfo}>
  //         <Text style={styles.adText}>Transporte Particular</Text>
  //         <Star score={4} style={styles.starStyle} />
  //       </View>
  //     </View>
  //   )}
  // />

  render() {
    const Anuncios = ({anunciante, categoria, linkAnuncio, score, img}) => {
      return (
        <View style={styles.adContainer}>
          <Image style={styles.adImg} source={img} />
          <Image
            style={styles.moreDetail}
            source={clickDetail}
            resizeMode="stretch"
          />
          <View style={styles.adInfo}>
            <Text style={styles.adText}>{anunciante}</Text>
            <Star score={score} style={styles.starStyle} />
          </View>
        </View>
      );
    };

    const listAnuncios = [
      {
        anunciante: 'Transporte Particular',
        categoria: 'transporte',
        score: 4,
        img: adImg,
      },
      {
        anunciante: 'Seu Transporte Agora',
        categoria: 'transporte',
        score: 5,
        img: adImg,
      },
      {
        anunciante: 'Zé Manutenção',
        categoria: 'manutenção',
        score: 4,
        img: adImg2,
      },
      {
        anunciante: 'Manutenções 24h',
        categoria: 'manutenção',
        score: 3,
        img: adImg2,
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>O que você procura?</Text>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Feather name="x" size={43} color="#FF6969" />
          </TouchableHighlight>
        </View>

        <View style={styles.searchSection}>
          <Feather style={styles.searchIcon} name="search" />
          <TextInput
            onChangeText={search => this.setState({search})}
            style={styles.input}
            placeholder="Digite o que procura"
            underlineColorAndroid="transparent"></TextInput>
          <TouchableHighlight onPress={() => {}}>
            <Feather style={styles.filterIcon} name="filter" />
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.articleContainer}>
          {this.filterList(listAnuncios).map((listItem, index) => (
            <Anuncios
              key={index}
              anunciante={listItem.anunciante}
              categoria={listItem.categoria}
              score={listItem.score}
              img={listItem.img}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
