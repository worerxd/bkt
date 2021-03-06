import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputArea: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  tagContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputTag: {
    marginVertical: 5,
    width: '80%',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  tagButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    marginVertical: 30,
    backgroundColor: '#474554',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  dateButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateLabelAndButtonContainer: {
    flex: 1,
  },
  dateButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#474554',
  },
  dateText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  dateTextAndButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
    marginLeft: 5,
    color: '#585052',
    marginTop: 10,
  },
  dateTextPicked: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444444',
  },
  errosMessage: {
    color: 'red',
    fontWeight: '700',
  },
});

export default styles;
