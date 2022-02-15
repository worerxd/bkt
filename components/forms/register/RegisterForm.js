import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './RegisterForm.styles';

const RegisterForm = props => {
  const {handleSubmit, values, handleChange, handleBlur, errors, touched} =
    props;
  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.form}>
      <View style={styles.email}>
        <AntDesign
          style={styles.emailIcon}
          name="user"
          size={24}
          color="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Nombres completos"
          onChangeText={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          value={values.fullName}
        />
      </View>
      {errors.fullName && (
        <Text style={styles.errosMessage}>
          {touched.fullName && errors.fullName}
        </Text>
      )}
      <View style={styles.email}>
        <MaterialCommunityIcons
          style={styles.emailIcon}
          name="email-outline"
          size={24}
          color="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
      </View>
      {errors.email && (
        <Text style={styles.errosMessage}>{touched.email && errors.email}</Text>
      )}
      <View style={styles.password}>
        <AntDesign
          style={styles.passwordIcon}
          name="lock"
          size={24}
          color="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
        />
      </View>
      {errors.password && (
        <Text style={styles.errosMessage}>
          {touched.password && errors.password}
        </Text>
      )}
      <View style={styles.password}>
        <AntDesign
          style={styles.passwordIcon}
          name="lock"
          size={24}
          color="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Repita su contraseña"
          onChangeText={handleChange('repeatPassword')}
          onBlur={handleBlur('repeatPassword')}
          value={values.repeatPassword}
          secureTextEntry
        />
      </View>
      {errors.repeatPassword && (
        <Text style={styles.errosMessage}>
          {touched.repeatPassword && errors.repeatPassword}
        </Text>
      )}
      <TouchableHighlight style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginText}>Registrarse</Text>
      </TouchableHighlight>
      <View style={styles.redirectContainer}>
        <Text style={styles.redirectText}>Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text style={styles.redirectLink}> Logeate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
