import {Formik} from 'formik';
import React from 'react';
import {Image, View} from 'react-native';
import LoginForm from '../../components/forms/login/LoginForm';
import styles from './Login.styles';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  return (
    <View style={styles.container}>
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
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log('values', values);
            actions.resetForm();
          }}>
          {({values, handleSubmit, handleChange, handleBlur}) => (
            <LoginForm
              values={values}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
