/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ScholarshipCard from '../../components/cards/ScholarshipCard';
import styles from './Scholarship.styles';
import {fetchScholarships} from '../../store/actions';

const Scholarship = () => {
  const dispatch = useDispatch();
  const scholarships = useSelector(state => state.scholarships);

  useEffect(async () => {
    dispatch(fetchScholarships());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.linearContainer} colors={['#54001A', '#524A4E']}>
        {scholarships.length > 0 ? (
          <View style={styles.list}>
            <FlatList
              data={scholarships}
              renderItem={({item}) => (
                <ScholarshipCard {...item} key={item._id} />
              )}
              keyExtractor={item => item._id}
            />
          </View>
        ) : (
          <Text style={styles.title}>Loading...</Text>
        )}
      </View>
    </View>
  );
};

export default Scholarship;
