import {StyleSheet, StatusBar, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
   
    backgroundColor: '#E7EAF0',
    alignItems: 'center',
  },

  backLogin: {
    marginTop: 20,
    borderRadius: 10,
    maxWidth: 200,
    maxHeight: 50,
  },

  sectionHeader: {
    backgroundColor: '#040404',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 70,
    paddingTop: 10,
  },

  textHeader: {
    color: '#FFFFFF',
    fontSize: 29,
    fontFamily: 'Dr Sugiyama',
  },

  textRegister: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
  },

  textRegisterInput: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'Montserrat',
    paddingTop: 10,
  },

  registerSection: {
    borderRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom:20,
    shadowColor: '#000',
    width: 300,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    color: '#707070',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 0.5,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    height: 385,
  },

  input: {
    paddingTop: 0,
  },
  continueImage: {
    marginTop: 20,
    borderRadius: 20,
    maxWidth: 200,
    maxHeight: 30,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom:20
  },
});
