import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: '#E7EAF0',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#515C6F',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  articleContainer: {
    marginTop: 20,
  },
  adContainer: {marginTop: 20,paddingBottom:20},
  adInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  adImg: {
    borderRadius: 10,
  
    width: 380,
    zIndex: 1,
    height: 152,
  },
  moreDetail: {
    width: 144,
    height: 30,
    zIndex: 2,
    position: 'absolute',
    top: 110,
    left: 165,
  },
  adText: {
    color: '#707070',
    fontSize: 16,
  },
  starStyle: {
    width: 100,
    height: 20,
  },

  searchSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 25,
    color: '#707070',
    marginRight: 10,
    opacity:0.7
  },
  input: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 15,
    backgroundColor: '#DCDCDC',
    color: '#707070',
    width: 230,
    height: 40,
    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginLeft:8,
    elevation: 0.5,
  },
  filterIcon: {
    paddingLeft: 30,

    fontSize: 20,
    color: '#FF6969',
  },
});
