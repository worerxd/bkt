/* eslint-disable react/no-array-index-key */
import React from 'react';
import {Image, Text, ImageBackground, View, ScrollView} from 'react-native';
import {Formik} from 'formik';

import styles from './SignUp.styles';
import SignUpForm from '../../components/forms/signUp/SignUpForm';
import signUpFormSchema from '../../components/forms/signUp/SignUpForm.Schema';

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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.logoContainer}>
          <ImageBackground
            source={{uri: 'https://cdn.wallpapersafari.com/55/73/ghY4rc.jpg'}}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://i.postimg.cc/vHDGySkf/logo1.png',
              }}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Crea una beca</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpFormSchema}
            onSubmit={(values, actions) => {
              console.log('values', values);
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
