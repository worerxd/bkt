/* eslint-disable react/style-prop-object */
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import LoginForm from '../../components/forms/login/LoginForm';
import styles from './Login.styles';
import {getUserFromLogin} from '../../store/actions';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async values => {
    try {
      dispatch(getUserFromLogin(values));
      navigation.navigate('BKT');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
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
          onSubmit={async (values, actions) => {
            await handleLogin(values);
            actions.resetForm();
          }}>
          {({values, handleSubmit, handleChange, handleBlur}) => (
            <LoginForm
              values={values}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errorMessage={errorMessage}
            />
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
