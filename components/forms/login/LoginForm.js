import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './LoginForm.styles';

const LoginForm = props => {
  const {handleSubmit, values, handleChange, handleBlur, errorMessage} = props;
  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Register');
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
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
      </View>
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
      {errorMessage && (
        <Text style={styles.errosMessage}>Email o contraseña incorrectos</Text>
      )}
      <TouchableHighlight style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>
      <View style={styles.redirectContainer}>
        <Text style={styles.redirectText}>No tienes una cuenta?</Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text style={styles.redirectLink}> Créate Una</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
