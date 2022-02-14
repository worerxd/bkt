import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: 'white',
  },
  inputArea: {
    marginBottom: 5,
    padding: 5,
    backgroundColor: 'white',
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
  },
  tagButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    marginVertical: 30,
    backgroundColor: '#54001A',
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
    backgroundColor: '#54001A',
    borderRadius: 5,
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
});

export default styles;
