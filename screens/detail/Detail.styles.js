import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#d0d8db',
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#810035',
    borderWidth: 3,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '700',
  },
  hoster: {
    paddingVertical: 10,
    color: '#9fa9a3',
    fontSize: 16,
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#929292',
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 5,
  },
  tagText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 15,
    color: '#27242B',
    lineHeight: 20,
    textAlign: 'justify',
  },
  date: {
    marginTop: 15,
    fontSize: 16,
    color: '#27242B',
  },
  dateSpan: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
  directedTo: {
    marginTop: 15,
    fontSize: 16,
    color: '#27242B',
  },
  directedToSpan: {
    fontWeight: '700',
  },
  requirementContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#F5F9FB',
    marginBottom: 15,
  },
  requirement: {
    fontSize: 22,
    fontWeight: '700',
  },
  requirementTitle: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
  },
  bullet: {
    color: 'blue',
    fontSize: 20,
    alignSelf: 'baseline',
  },
  listItem: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 16,
  },
  footer: {
    height: 120,
    alignItems: 'center',
    backgroundColor: '#A1A1A1',
  },
  footerText: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
    paddingTop: 10,
    color: 'white',
  },
  button: {
    width: '70%',
    backgroundColor: '#800000',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 10,
  },
  buttonText: {
    padding: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#55B3B1',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#1B1717',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default styles;
