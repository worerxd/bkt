import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d8db',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    marginTop: 15,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 100,
  },
  body: {
    flex: 3,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 30,
    color: 'black',
    lineHeight: 42,
  },
  description: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 22,
    color: '#3e4444',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  button: {
    alignItems: 'center',
    width: 250,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#474554',
    padding: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    padding: 5,
  },
});

export default styles;
