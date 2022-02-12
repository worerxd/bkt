/* eslint-disable react/prop-types */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './Home.styles';

const Home = ({navigation}) => {
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
        <Text style={styles.title}>Encuentra tu {'\n'}beca ideal!</Text>
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
