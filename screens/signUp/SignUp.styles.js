import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  body: {
    backgroundColor: '#E2E2E2',
  },
  logoContainer: {
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 200,
  },
  formContainer: {
    marginTop: 15,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
