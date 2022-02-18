/* eslint-disable react/prop-types */
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import styles from './Home.styles';
import deviceServices from '../../services/devices';

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
    deviceServices.createDeviceToken({token});
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
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener(notificationText => {
        setNotification(notificationText);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
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
  const goToAbout = () => {
    navigation.navigate('Scholarships');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://elheraldoslp.com.mx/wp-content/uploads/2017/04/estudios2.jpg',
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Encuentra tu {'\n'}beca ideal !</Text>
        <Text style={styles.description}>
          El app donde encontrarás {'\n'}todas las becas en un {'\n'}mismo
          lugar. {expoPushToken}
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
