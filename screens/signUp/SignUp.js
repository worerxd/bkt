/* eslint-disable react/no-array-index-key */
import React, {useState} from 'react';
import {Image, Text, View, ScrollView, Modal, Pressable} from 'react-native';
import {Formik} from 'formik';

import styles from './SignUp.styles';
import SignUpForm from '../../components/forms/signUp/SignUpForm';
import signUpFormSchema from '../../components/forms/signUp/SignUpForm.Schema';
import scholarshipServices from '../../services/scholarships';

const initialValues = {
  title: '',
  imageUrl: '',
  hoster: '',
  description: '',
  date: {
    start: null,
    end: null,
  },
  tags: [
    {
      name: '',
    },
  ],
  target: {
    directedTo: '',
    fromUniversity: '',
  },
  duration: '',
  spots: '',
  requirements: {
    title: '',
    list: [
      {
        item: '',
      },
    ],
  },
};

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCreateScholarship = async values => {
    try {
      const response = await scholarshipServices.createScholarship(values);
      if (response.ok) {
        setOpenModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://i.postimg.cc/vHDGySkf/logo1.png',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formContainer}>
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
                  Su solicitud ha sido enviada para revisión, nos contactaremos
                  con usted pronto.
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setOpenModal(!openModal)}>
                  <Text style={styles.textStyle}>Aceptar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Text style={styles.formTitle}>Crea una beca</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpFormSchema}
            onSubmit={async (values, actions) => {
              await handleCreateScholarship(values);
              actions.resetForm();
            }}>
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
            }) => (
              <SignUpForm
                values={values}
                errors={errors}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              />
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
