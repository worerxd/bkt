import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import RegisterForm from '../../components/forms/register/RegisterForm';
import registerFormSchema from '../../components/forms/register/RegisterForm.Schema';
import userServices from '../../services/users';
import styles from './Register.styles';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const Register = () => {
  const navigation = useNavigation();

  const handleRegister = async values => {
    try {
      const response = await userServices.createUser(values);
      const data = await response.json();
      if (response.ok) {
        navigation.navigate('Login', data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>
        <View style={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={registerFormSchema}
            onSubmit={async (values, actions) => {
              await handleRegister(values);
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
              <RegisterForm
                values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
