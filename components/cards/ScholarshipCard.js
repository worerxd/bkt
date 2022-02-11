/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './ScholarshipCard.styles'


const ScholarshipCard = (props) => {
  return (
    <TouchableHighlight>
      <View style={styles.item}>
        <View style={styles.card}>
          <Text style={styles.date}>
          <FontAwesome name="circle" size={14} color="green" />
            {` Abierta hasta ${props.endDate}`}
          </Text>
          <Image style={styles.image}
            source={{
              uri: props.imageUrl,
            }}
          />
          <View style={styles.header}>
            <Text style={styles.title}>
              {props.title}
            </Text>
            <Text style={styles.hoster}>
              {props.hoster}
            </Text>
            <View style={styles.tagsContainer}>
              {props.tags.map(tag => (<Text key={tag.name} style={styles.tag}>{tag.name}</Text>))}
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.leftSection}>
              <Text style={styles.textTitle}>
                Dirigida a
              </Text>
              <Text style={styles.textBold}>
                {props.target.directedTo}
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.textTitle}>
                De la universidad/ es
              </Text>
              <Text style={styles.textBold}>
                {props.target.fromUniversity}
              </Text>
            </View>
          </View>
          <View style={styles.hr}/>
          <View style={styles.body}>
            <View style={styles.leftSection}>
              <Text style={styles.textTitle}>
                Duración de la beca
              </Text>
              <Text style={styles.textBold}>
                {props.time.duration}
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.textTitle}>
                Plazas
              </Text>
              <Text style={styles.textBold}>
                {props.time.spots} becas
              </Text>
            </View>

          </View>
          <TouchableHighlight style={styles.arrow}>
            <FontAwesome5 name="arrow-right" size={24} color="gray" />
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  );
};



export default ScholarshipCard;
