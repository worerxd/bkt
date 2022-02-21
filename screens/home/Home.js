/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import styles from './Home.styles';
import deviceServices from '../../services/devices';
import {getUserFromAsyncStorage} from '../../store/actions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const {status: existingStatus} = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const {status} = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return null;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    await deviceServices.createDeviceToken({token});
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const Home = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current =
      Notifications.addNotificationReceivedListener(notificationText => {
        setNotification(notificationText);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    dispatch(getUserFromAsyncStorage());
  }, []);
  const goToAbout = () => {
    navigation.navigate('Scholarships');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <StatusBar style="light" />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://freepikpsd.com/file/2019/10/scholarship-png-4-Transparent-Images.png',
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Encuentra tu {'\n'}beca ideal !</Text>
        <Text style={styles.description}>
          El app donde encontrarás {'\n'}todas las becas en un {'\n'}mismo
          lugar.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToAbout}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
