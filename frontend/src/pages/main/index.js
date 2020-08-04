import React, {Component} from 'react';

import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  sliderWidth,
  itemWidth,
} from '././../../assets/styles/SliderEntry.style';
import SliderEntry from '../../components/SliderEntry';
import BannerHome from '../../components/BannerHome'
import styles, {colors} from '././../../assets/styles/index.style';
import {ENTRIES1, ENTRIES2, ENTRIES3} from './../../utils/entries';
import {scrollInterpolators, animatedStyles} from './../../utils/animations';
 
import {
  Container,
  VideoCardList,
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

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  //----------------------------------------------//

  _renderItem({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({item, index}) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem({item, index}) {
    return <SliderEntry data={item} even={true} />;
  }

  mainExample(number, title) {
    const {slider1ActiveSlide} = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={(c) => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }

  momentumExample(number, title) {
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Mais Acessados`}</Text>
        {/*<Text style={styles.subtitle}>{title}</Text>*/}
        <Carousel
          data={ENTRIES2}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType={'spring'}
          activeAnimationOptions={{
            friction: 4,
            tension: 40,
          }}
        />
      </View>
    );
  }

  layoutExample(number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View
        style={[
          styles.exampleContainer,
          isTinder ? styles.exampleContainerDark : styles.exampleContainerLight,
        ]}>
        <Text
          style={[
            styles.title,
            isTinder ? {} : styles.titleDark,
          ]}>{`Example ${number}`}</Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
          {title}
        </Text>
        <Carousel
          data={isTinder ? ENTRIES2 : ENTRIES1}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }

  customExample(number, title, refNumber, renderItemFunc) {
    const isEven = refNumber % 2 === 0;

    // Do not render examples on Android; because of the zIndex bug, they won't work as is
    return !IS_ANDROID ? (
      <View
        style={[
          styles.exampleContainer,
          isEven ? styles.exampleContainerDark : styles.exampleContainerLight,
        ]}>
        <Text
          style={[
            styles.title,
            isEven ? {} : styles.titleDark,
          ]}>{`Example ${number}`}</Text>
        <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>
          {title}
        </Text>
        <Carousel
          data={isEven ? ENTRIES2 : ENTRIES1}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          scrollInterpolator={
            scrollInterpolators[`scrollInterpolator${refNumber}`]
          }
          slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
          useScrollView={true}
        />
      </View>
    ) : (
      false
    );
  }

  banner() {
    return (
      <View style={styles.exampleContainer}>         
        <Carousel
          data={ENTRIES3}
          renderItem={this._renderDarkItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType={'spring'}
          activeAnimationOptions={{
            friction: 4,
            tension: 40,
          }}
        />
      </View>
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{x: 1, y: 0}}
        endPoint={{x: 0, y: 1}}
        style={styles.gradient}
      />
    );
  }

  render() {
    const example1 = this.mainExample(
      1,
      'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots',
    );
    const example2 = this.momentumExample(
      2,
      'Momentum | Left-aligned | Active animation',
    );
    const bannerHome= this.banner(
      
    );
     
    const illustration = 'http://i.imgur.com/pewusMzl.jpg';
    return (
      <Container>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <StatusBar
              translucent={true}
              backgroundColor={'rgba(0, 0, 0, 0.3)'}
              barStyle={'light-content'}
            />
             

            <ScrollView
              style={{flex: 5}}
              scrollEventThrottle={200}
              directionalLockEnabled={true}>
              <View style={styles.exampleContainer}>
                <Text style={styles.title}>O que você procura?</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}
                style={{flex: 1, height: 120, backgroundColor: '#fff'}}>
                <Image
                  source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 110, height: 110}}
                />
              </ScrollView>

              {example2}
              {bannerHome}
            </ScrollView>
            
          </View>
          
        </SafeAreaView>
      </Container>
    );
  }
}
