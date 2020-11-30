import React from 'react';
import {Text, View, FlatList, Image, TouchableHighlight} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import {TextInput} from 'react-native-gesture-handler';

import Star from 'react-native-star-view';

import styles from './styles';
import adImg from '../../images/anuncio.png';
import clickDetail from '../../images/clicktoaccess.png';



export default function Search() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>O que você procura?</Text>        
        <Feather name="x" size={43} color="#FF6969" />
      </View>

        
      <View style={styles.searchSection}>
        <Feather style={styles.searchIcon} name="search" />
        <TextInput
          style={styles.input}
          placeholder="Fretado"
          underlineColorAndroid="transparent"></TextInput>
        <TouchableHighlight onPress={() => {}}>
          <Feather style={styles.filterIcon} name="filter" />
        </TouchableHighlight>
      </View>

     
      <FlatList
        data={[1, 2, 3, 4]}
        style={styles.articleContainer}
        keyExtractor={(ad) => String(ad)}
        renderItem={() => (
          <View style={styles.adContainer}>
            <Image style={styles.adImg} source={adImg} />
            <Image
              style={styles.moreDetail}
              source={clickDetail}
              resizeMode="stretch"
            />
            <View style={styles.adInfo}>
              <Text style={styles.adText}>Transporte Particular</Text>
              <Star score={4} style={styles.starStyle} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
