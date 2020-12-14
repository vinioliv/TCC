import {StyleSheet, StatusBar, Dimensions} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    backgroundColor: '#E7EAF0',
  },
  registerSection: {
    borderRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',

    shadowColor: '#000',

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
    paddingLeft: 15,
    height: 400,
  },

  input: {
    paddingTop: 10,

    width: 250,

    alignSelf: 'flex-start',
  },
  textRegister: {
    fontFamily: 'Montserrat',
    color: '#989797',
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },

  backImagem: {
    marginTop: 30,
    borderRadius: 20,
    maxWidth: 150,
    maxHeight: 70,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  textGeneral: {
    fontFamily: 'Montserrat',
    paddingTop: 10,
    color: '#707070',
    
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },

  continueImage: {
    marginTop: 20,
    borderRadius: 20,
    maxWidth: 200,
    maxHeight: 30,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingBottom: 750
  },

});
