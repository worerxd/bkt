import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0d8db',
  },
  linearContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0d8db',
  },
  list: {
    marginTop: 20,
    flex: 3,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  linear: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  picker: {
    width: 160,
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default styles;
