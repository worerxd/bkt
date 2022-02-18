/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PendingCard from '../../components/cards/PendingCard';
import {fetchScholarshipsPending} from '../../store/actions';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#DEEAEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  header: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#740613',
    marginTop: 30,
    marginBottom: 15,
  },
  list: {
    width: '100%',
  },
});

const Pending = () => {
  const dispatch = useDispatch();
  const scholarships = useSelector(state => state.scholarshipsPending);

  useEffect(() => {
    dispatch(fetchScholarshipsPending());
  }, [scholarships]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nombre de la beca</Text>
        <TextInput placeholder="Nombre de la beca" />
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
