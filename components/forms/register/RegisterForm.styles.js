import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  email: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  emailIcon: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRightWidth: 0,
  },
  input: {
    width: '84%',
    backgroundColor: 'white',
    paddingLeft: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  password: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  passwordIcon: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRightWidth: 0,
  },
  loginButton: {
    paddingVertical: 12,
    backgroundColor: '#DD660D',
    borderRadius: 5,
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redirectContainer: {
    flexDirection: 'row',
    marginVertical: 35,
  },
  redirectText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#8B95B0',
  },
  redirectLink: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#942B4E',
  },
  errosMessage: {
    color: 'red',
    fontWeight: '700',
  },
});

export default styles;
