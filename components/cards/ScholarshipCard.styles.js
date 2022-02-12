import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    marginVertical: 5,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  date: {
    paddingVertical: 5,
    marginLeft: 5,
    fontWeight: '500',
  },
  image: {
    height: 250,
    width: '100%',
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
    color: '#9fa9a3',
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },
  tagText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
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
    fontSize: 15,
    fontWeight: '700',
  },
  textTitle: {
    fontSize: 15,
    color: '#272424',
  },
  hr: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  arrow: {
    marginVertical: 15,
    marginEnd: 10,
    marginLeft: 'auto',
    marginRight: 15,
  },
});

export default styles;
