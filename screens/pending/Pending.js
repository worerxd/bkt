/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PendingCard from '../../components/cards/PendingCard';
import {fetchScholarshipsPending} from '../../store/actions';
import styles from './Pending.styles';

const Pending = () => {
  const dispatch = useDispatch();
  const scholarships = useSelector(state => state.scholarshipsPending);

  useEffect(() => {
    dispatch(fetchScholarshipsPending());
  }, [scholarships]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Becas pendientes</Text>
      </View>
      <View style={styles.list}>
        {scholarships.length > 0 ? (
          <FlatList
            data={scholarships}
            renderItem={({item}) => <PendingCard {...item} key={item._id} />}
            keyExtractor={item => item._id}
            numColumns={2}
          />
        ) : (
          <Text style={styles.title}>Loading</Text>
        )}
      </View>
    </View>
  );
};

export default Pending;
