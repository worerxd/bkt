import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    marginTop: 25,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 100,
  },
  body: {
    flex: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 30,
    color: 'black',
    lineHeight: 35,
  },
  description: {
    marginTop: 15,
    marginLeft: 30,
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
    backgroundColor: '#54001A',
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
