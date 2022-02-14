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
});

export default styles;
