import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ScholarshipCard from '../../components/cards/ScholarshipCard';

const data = [
  {
    id: 1,
    title: 'Becas Santander Women | Emerging Leaders 2022  - LSE',
    imageUrl: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/01/16/000839600W.jpg',
    hoster: 'London School of Economics And Political Science',
    description: 'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    endDate: '19/03/2022',
    tags: [
      {
        name: 'women'
      },
      {
        name: 'online'
      }
    ],
    target: {
      directedTo: 'Joven Profesional, Profesional experimentado',
      fromUniversity: 'Cualquier universidad'
    },
    time: {
      duration: '12 semanas',
      spots: '5000',
    },
    status: 'approved'
  },
  {
    id: 1,
    title: 'Santander Scholarships Women | W50 Leadership 2022',
    hoster: 'London School of Economics And Political Science',
    imageUrl: 'https://www.pronabec.gob.pe/wp-content/uploads/2021/02/Talentos-Pronabec-3.jpg',
    description: 'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    endDate: '19/03/2022',
    tags: [
      {
        name: 'women',
      },
      {
        name: 'presencial'
      }
    ],
    target: {
      directedTo: 'Joven Profesional, Profesional experimentado',
      fromUniversity: 'Cualquier universidad'
    },
    time: {
      duration: '15 semanas',
      spots: '300',
    },
    status: 'approved'
  },
]

const Scholarship = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Todas las becas:
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
        data={data}
        renderItem={({item}) => <ScholarshipCard {...item} />}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  titleContainer: {
    textAlign: 'left',
    width:'100%',
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    paddingLeft: 10,
  }
});

export default Scholarship;
