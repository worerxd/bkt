import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import LoginForm from '../../components/forms/login/LoginForm';
import authServices from '../../services/auth';
import styles from './Login.styles';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async values => {
    try {
      const response = await authServices.loginAccount(values);
      const data = await response.json();
      if (response.ok) {
        setErrorMessage(false);
        navigation.navigate('Landing', data);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
