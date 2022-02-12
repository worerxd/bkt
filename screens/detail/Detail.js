/* eslint-disable import/no-extraneous-dependencies */
import {format} from 'date-fns';
import {es} from 'date-fns/locale';
import React, {useEffect, useState} from 'react';
import {Image, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import styles from './Detail.styles';

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
      start: '19,02,2022',
      end: '19,03,2022',
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
          item: 'Resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.',
        },
        {
          item: 'English level: Fluency in English equivalent to C1',
        },
      ],
    },
    status: 'approved',
  },
];

const Detail = ({route}) => {
  const {id} = route.params;
  const [scholarship, setScholarship] = useState();

  useEffect(() => {
    const scholarshipData = data.find(item => item.id === id);
    setScholarship(scholarshipData);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.item}>
        {scholarship ? (
          <View>
            <Image
              style={styles.image}
              source={{
                uri: scholarship.imageUrl,
              }}
            />
            <View style={styles.header}>
              <Text style={styles.title}>{scholarship.title}</Text>
              <Text style={styles.hoster}>{scholarship.hoster}</Text>
              <View style={styles.tagsContainer}>
                {scholarship.tags.map(tag => (
                  <View key={tag.id} style={styles.tag}>
                    <Text style={styles.tagText}>{tag.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{scholarship.description}</Text>
              <Text style={styles.date}>
                <Text style={styles.dateSpan}>Días programados:</Text>
                {` ${format(new Date(2022, 11, 2), 'PPPP', {
                  locale: es,
                })} -  ${format(new Date(2022, 11, 3), 'PPPP', {
                  locale: es,
                })}`}
                .{/* ${scholarship.date.end} */}
              </Text>
              <Text style={styles.directedTo}>
                <Text style={styles.directedToSpan}>Dirigido a: </Text>
                {scholarship.target.directedTo}.
              </Text>
            </View>
            <View style={styles.requirementContainer}>
              <Text style={styles.requirement}>Requisitos</Text>
              <Text style={styles.requirementTitle}>
                {scholarship.requirements.title}
              </Text>
              {scholarship?.requirements?.list.map(requirement => (
                <View style={styles.row} key={requirement.item}>
                  <Text style={styles.bullet}>{'\u2022'}</Text>
                  <Text style={styles.listItem}>{requirement.item}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <Text>Nothing here</Text>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <FontAwesome name="circle" size={10} color="green" />
          {`   Inscripciones abiertas \n de ${format(
            new Date(2022, 11, 2),
            'dd/MM/yy',
          )} al ${format(new Date(2022, 11, 3), 'dd/MM/yy')} (GMT-05:00)`}
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Inscribirme</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Detail;
