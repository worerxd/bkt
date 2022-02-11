import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7d7e8',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 100,
  },
  body:{
    flex: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10,
    color: 'black',
    lineHeight: 35,
  },
  description: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 18,
    color: '#3e4444',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    width: 250,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'black',
    padding: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    padding: 5,
  },
});
