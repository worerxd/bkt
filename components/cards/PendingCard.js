import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import deviceServices from '../../services/devices';
import scholarshipServices from '../../services/scholarships';
import {fetchScholarshipsPending} from '../../store/actions';

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

const PendingCard = props => {
  const dispatch = useDispatch();
  const {_id, title, hoster} = props;

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: {someData: 'goes here'},
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  const handleChangeStatus = async () => {
    const deviceResponse = await deviceServices.getAllDevicesTokens();
    const devices = await deviceResponse.json();

    const tokenDevices = devices.map(device => device.token);

    const response = await scholarshipServices.changeScholarshipState(_id);
    if (response.ok) {
      dispatch(fetchScholarshipsPending());
      await sendPushNotification(tokenDevices);
    } else {
      alert('something wrong happened');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.hoster}>{hoster}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.approveButton}
          onPress={handleChangeStatus}>
          <Text style={styles.approveText}>Approved</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PendingCard;
