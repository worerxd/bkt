/* eslint-disable import/no-extraneous-dependencies */
import {format} from 'date-fns';
import {es} from 'date-fns/locale';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
  Pressable,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './Detail.styles';
import {fetchSingleScholarship} from '../../store/actions';

const Detail = ({route}) => {
  const {_id: id} = route.params;
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const scholarship = useSelector(state => state.currentScholarship);
  const user = useSelector(state => state.user);
  const navigator = useNavigation();

  useEffect(async () => {
    dispatch(fetchSingleScholarship(id));
  }, [id]);

  const handleInscription = () => {
    if (!user) {
      setOpenModal(true);
    } else {
      setOpenModalAuth(true);
    }
  };

  const handleNavigateTologin = () => {
    setOpenModal(!openModal);
    navigator.navigate('Login');
  };

  const handleNavigateToScholarships = () => {
    setOpenModal(!openModalAuth);
    navigator.navigate('Scholarships');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.item}>
        <Modal
          animationType="slide"
          transparent
          visible={openModal}
          onRequestClose={() => {
            setOpenModal(!openModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Para poder inscribirse, debe primero ingresar con su cuenta.
              </Text>
              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={handleNavigateTologin}>
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent
          visible={openModalAuth}
          onRequestClose={() => {
            setOpenModal(!openModalAuth);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Muchas gracias por inscribirse, nos comunicaremos con usted
                pronto.
              </Text>
              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={handleNavigateToScholarships}>
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {scholarship ? (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>{scholarship.title}</Text>
              <Text style={styles.hoster}>{scholarship.hoster}</Text>
              <View style={styles.tagsContainer}>
                {scholarship.tags?.map(tag => (
                  <View key={tag.name} style={styles.tag}>
                    <Text style={styles.tagText}>{tag.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{scholarship?.description}</Text>
              <Text style={styles.date}>
                <Text style={styles.dateSpan}>Días programados:</Text>
                {` ${format(new Date(scholarship?.date?.start), 'PPPP', {
                  locale: es,
                })} -  ${format(new Date(scholarship?.date?.end), 'PPPP', {
                  locale: es,
                })}`}
              </Text>
              <Text style={styles.directedTo}>
                <Text style={styles.directedToSpan}>Dirigido a: </Text>
                {scholarship?.target?.directedTo}.
              </Text>
            </View>
            <View style={styles.requirementContainer}>
              <Text style={styles.requirement}>Requisitos</Text>
              <Text style={styles.requirementTitle}>
                {scholarship?.requirements?.title}
              </Text>
              {scholarship?.requirements?.list?.map(requirement => (
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
        <TouchableHighlight style={styles.button} onPress={handleInscription}>
          <Text style={styles.buttonText}>Inscribirme</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Detail;
