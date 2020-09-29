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
  adContainer: {marginTop: 20},
  adInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  adImg: {
    borderRadius: 10,
    width: 380,
    zIndex: 1,
  },
  moreDetail: {
    width: 150,
    height: 40,
    zIndex: 2,
    position: 'absolute',
    top: 110,
    left: 225,
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
    fontSize: 15,
    color: '#707070',
    marginLeft: 20,
  },
  input: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 15,
    backgroundColor: '#E7EAF0',
    color: '#707070',
    width: 230,
    height: 30,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0.5,
  },
  filterIcon: {
    paddingLeft: 30,

    fontSize: 20,
    color: '#FF6969',
  },
});
