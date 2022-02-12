/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import styles from './ScholarshipCard.styles';

const ScholarshipCard = props => {
  const {id, date, imageUrl, title, hoster, tags, target, time} = props;
  const navigation = useNavigation();

  const handleCardDetail = () => {
    try {
      navigation.navigate('Detail', {id});
    } catch (error) {
      alert(error);
    }
  };
  return (
    <TouchableHighlight onPress={handleCardDetail} underlayColor="white">
      <View style={styles.item}>
        <Text style={styles.date}>
          <FontAwesome name="circle" size={14} color="green" />
          {` Abierta hasta ${date.end}`}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.hoster}>{hoster}</Text>
          <View style={styles.tagsContainer}>
            {tags.map(tag => (
              <View key={tag.id} style={styles.tag}>
                <Text style={styles.tagText}>{tag.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.leftSection}>
            <Text style={styles.textTitle}>Dirigida a</Text>
            <Text style={styles.textBold}>{target.directedTo}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.textTitle}>De la universidad/ es</Text>
            <Text style={styles.textBold}>{target.fromUniversity}</Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          <View style={styles.leftSection}>
            <Text style={styles.textTitle}>Duración de la beca</Text>
            <Text style={styles.textBold}>{time.duration}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.textTitle}>Plazas</Text>
            <Text style={styles.textBold}>{time.spots} becas</Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.arrow}
          onPress={handleCardDetail}
          underlayColor="white">
          <FontAwesome5 name="arrow-right" size={24} color="gray" />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  );
};

export default ScholarshipCard;
