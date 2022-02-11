import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  card: {
    shadowColor: '#9fa9a3',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  date: {
    paddingVertical: 5,
    marginLeft: 5,
    fontWeight: '500'
  },
  image: {
    height: 250,
    marginHorizontal: 'auto',
    width: '95%',
  },
  header: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '700',
  },
  hoster: {
    paddingVertical: 10,
    color: "#9fa9a3",
  },
  tagsContainer: {
    display:'flex',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 15,
    textAlign: 'center',
    width: 'fit-content',
    marginLeft: 5,
    marginTop: 5,
  },
  body: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    marginLeft: 5,
  },
  textBold: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '700'
  },
  textTitle: {
    fontSize: 16,
  },
  hr: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  arrow: {
    marginVertical: 15,
    marginEnd: 10,
    textAlign: 'right'
  }
});
