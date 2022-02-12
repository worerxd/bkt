import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {LinearGradient} from 'expo-linear-gradient';
import ScholarshipCard from '../../components/cards/ScholarshipCard';
import styles from './Scholarship.styles';

const data = [
  {
    id: 1,
    title: 'Becas Santander Women | Emerging Leaders 2022  - LSE',
    imageUrl:
      'https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/01/16/000839600W.jpg',
    hoster: 'London School of Economics And Political Science',
    description:
      'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    date: {
      start: '19/02/2022',
      end: '19/03/2022',
    },
    tags: [
      {
        id: 1,
        name: 'women',
      },
      {
        id: 2,
        name: 'online',
      },
    ],
    target: {
      directedTo: 'Joven Profesional, Profesional experimentado',
      fromUniversity: 'Cualquier universidad',
    },
    time: {
      duration: '12 semanas',
      spots: '5000',
    },
    requirements: {
      title: 'Eligibility criteria',
      list: [
        {
          item: 'Women managers to mid-level managers looking to progress in their careers.',
        },
        {
          item: 'resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.',
        },
        {
          item: 'English level: Fluency in English equivalent to C1',
        },
      ],
    },
    status: 'approved',
  },
  {
    id: 2,
    title: 'Santander Scholarships Women | W50 Leadership 2022',
    hoster: 'London School of Economics And Political Science',
    imageUrl:
      'https://www.pronabec.gob.pe/wp-content/uploads/2021/02/Talentos-Pronabec-3.jpg',
    description:
      'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    date: {
      start: '19/02/2022',
      end: '19/03/2022',
    },
    tags: [
      {
        id: 1,
        name: 'women',
      },
      {
        id: 2,
        name: 'presencial',
      },
    ],
    target: {
      directedTo: 'Joven Profesional, Profesional experimentado',
      fromUniversity: 'Cualquier universidad',
    },
    time: {
      duration: '15 semanas',
      spots: '300',
    },
    requirements: {
      title: 'Eligibility criteria',
      list: [
        {
          item: 'Women managers to mid-level managers looking to progress in their careers.',
        },
        {
          item: 'resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.',
        },
        {
          item: 'English level: Fluency in English equivalent to C1',
        },
      ],
    },
    status: 'approved',
  },
];

const categories = [
  {
    id: 1,
    name: 'Tecnologia',
  },
  {
    id: 2,
    name: 'Investigacion',
  },
  {
    id: 3,
    name: 'Estudios',
  },
];

const Scholarship = () => {
  const [selectedValue, setSelectedValue] = useState('tecnologia');
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearContainer}
        colors={['#3ca6bf', '#1b159b']}>
        <View style={styles.titleContainer}>
          <LinearGradient style={styles.linear} colors={['#1b159b', '#3ca6bf']}>
            <Text style={styles.title}>Categoría: </Text>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={itemValue => setSelectedValue(itemValue)}>
              {categories?.map(category => (
                <Picker.Item
                  label={category.name}
                  value={category.name}
                  key={category.name}
                />
              ))}
            </Picker>
          </LinearGradient>
        </View>
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={({item}) => <ScholarshipCard {...item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Scholarship;
