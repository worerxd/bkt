import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEEAEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  linearContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 3,
  },
  titleContainer: {
    textAlign: 'left',
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  linear: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 160,
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default styles;
