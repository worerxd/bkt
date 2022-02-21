import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import deviceServices from '../../services/devices';
import scholarshipServices from '../../services/scholarships';
import {fetchScholarshipsPending} from '../../store/actions';
import styles from './PendingCard.styles';

const PendingCard = props => {
  const dispatch = useDispatch();
  const {_id, title, hoster} = props;

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'BKT',
      body: 'Una nueva beca ha sido registrada!',
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
    console.log(tokenDevices);
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
