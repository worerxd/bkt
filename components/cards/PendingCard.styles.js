import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  body: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  hoster: {
    paddingVertical: 10,
    color: '#202124',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  approveButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 5,
  },
  approveText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
