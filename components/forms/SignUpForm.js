/* eslint-disable react/no-array-index-key */
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {format} from 'date-fns';
import {FieldArray} from 'formik';
import {useState} from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './SignUpForm.styles';

const SignUpForm = props => {
  const {handleSubmit, values, handleChange} = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modeStart, setModeStart] = useState('date');
  const [modeEnd, setModeEnd] = useState('date');
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStart(Platform.OS === 'ios');
    setStartDate(currentDate);
    values.date.start = currentDate;
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEnd(Platform.OS === 'ios');
    setEndDate(currentDate);
    values.date.end = currentDate;
  };

  const showModeStart = currentMode => {
    setShowStart(true);
    setModeStart(currentMode);
  };
  const showModeEnd = currentMode => {
    setShowEnd(true);
    setModeEnd(currentMode);
  };

  const showDatepickerStart = () => {
    showModeStart('date');
  };
  const showDatepickerEnd = () => {
    showModeEnd('date');
  };

  return (
    <View>
      <Text style={styles.inputLabel}>TÍTULO</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Beca Full Stack Javascript"
        onChangeText={handleChange('title')}
        value={values.title}
      />
      <Text style={styles.inputLabel}>ORGANIZACIÓN</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: MakeItReal"
        onChangeText={handleChange('hoster')}
        value={values.hoster}
      />
      <Text style={styles.inputLabel}>DESCRIPCIÓN</Text>
      <TextInput
        style={styles.inputArea}
        placeholder="Ejemplo: Beca programa Top horario completo..."
        onChangeText={handleChange('description')}
        value={values.description}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
      <Text style={styles.inputLabel}>PALABRAS CLAVE</Text>
      <FieldArray name="tags">
        {fieldArrayProps => {
          const {push, remove, form} = fieldArrayProps;
          const {tags} = form.values;
          return (
            <View>
              {tags.map((tag, index) => (
                <View key={index} style={styles.tagContainer}>
                  <TextInput
                    style={styles.inputTag}
                    placeholder="Ejemplo: online"
                    onChangeText={handleChange(`tags[${index}].name`)}
                    value={values.tags[index].name}
                  />
                  <View style={styles.tagButtonsContainer}>
                    <TouchableHighlight
                      style={styles.removeTag}
                      onPress={() => remove(index)}
                      underlayColor="white">
                      <Ionicons
                        name="remove-circle"
                        size={30}
                        color="#54001A"
                      />
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={styles.addTag}
                      onPress={() => push('')}
                      underlayColor="white">
                      <Ionicons
                        name="ios-add-circle"
                        size={30}
                        color="#54001A"
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              ))}
            </View>
          );
        }}
      </FieldArray>

      <View style={styles.dateButtonsContainer}>
        <View style={styles.dateLabelAndButtonContainer}>
          <Text style={styles.inputLabel}>FECHA DE INICIO</Text>
          <View style={styles.dateTextAndButton}>
            <Text style={styles.dateTextPicked}>
              {format(startDate, 'dd-MM-yyyy')}
            </Text>
            <TouchableHighlight
              onPress={showDatepickerStart}
              style={styles.dateButton}>
              <FontAwesome name="calendar-o" size={22} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.dateLabelAndButtonContainer}>
          <Text style={styles.inputLabel}>FECHA DE FIN</Text>
          <View style={styles.dateTextAndButton}>
            <Text style={styles.dateTextPicked}>
              {format(endDate, 'dd-MM-yyyy')}
            </Text>
            <TouchableHighlight
              onPress={showDatepickerEnd}
              style={styles.dateButton}>
              <FontAwesome name="calendar-o" size={22} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      {showStart && (
        <DateTimePicker
          value={startDate}
          mode={modeStart}
          is24Hour
          display="default"
          onChange={onChangeStart}
        />
      )}
      {showEnd && (
        <DateTimePicker
          value={endDate}
          mode={modeEnd}
          is24Hour
          display="default"
          onChange={onChangeEnd}
        />
      )}

      <Text style={styles.inputLabel}>DIRIGIDO A</Text>
      <TextInput
        style={styles.inputArea}
        placeholder="Ejemplo: Todas las personas, Con previo conocimiento en programación, etc..."
        onChangeText={handleChange('target.directedTo')}
        value={values.target.directedTo}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
      />

      <Text style={styles.inputLabel}>UNIVERSIDADES</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Universidad Privada del Norte, UPC ó Cualquier universidad."
        onChangeText={handleChange('target.fromUniversity')}
        value={values.target.fromUniversity}
      />
      <Text style={styles.inputLabel}>DURACIÓN</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 16 semanas"
        onChangeText={handleChange('duration')}
        value={values.duration}
      />
      <Text style={styles.inputLabel}>PLAZAS</Text>
      <TextInput
        style={styles.input}
        placeholder="250 plazas"
        onChangeText={handleChange('spots')}
        value={values.spots}
      />
      <Text style={styles.inputLabel}>CATEGORÍA DEL REQUERIMIENTO</Text>
      <TextInput
        style={styles.input}
        placeholder="Capacidad para resolver problemas"
        onChangeText={handleChange('requirements.title')}
        value={values.requirements.title}
      />
      <Text style={styles.inputLabel}>REQUERIMIENTOS</Text>
      <FieldArray name="requirements.list">
        {fieldListProps => {
          const {push, remove, form} = fieldListProps;
          const {list} = form.values.requirements;
          return (
            <View>
              {list.map((item, index) => (
                <View key={index} style={styles.tagContainer}>
                  <TextInput
                    style={styles.inputTag}
                    placeholder="Ejemplo: Personas con disponibilidad de tiempo..."
                    onChangeText={handleChange(
                      `requirements.list[${index}].item`,
                    )}
                    value={values.requirements.list[index].item}
                    multiline
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                  <View style={styles.tagButtonsContainer}>
                    <TouchableHighlight
                      style={styles.removeTag}
                      onPress={() => remove(index)}
                      underlayColor="white">
                      <Ionicons
                        name="remove-circle"
                        size={30}
                        color="#54001A"
                      />
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={styles.addTag}
                      onPress={() => push('')}
                      underlayColor="white">
                      <Ionicons
                        name="ios-add-circle"
                        size={30}
                        color="#54001A"
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              ))}
            </View>
          );
        }}
      </FieldArray>

      <TouchableHighlight
        style={styles.submitButton}
        title="Enviar"
        onPress={handleSubmit}>
        <Text style={styles.submitText}>ENVIAR</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SignUpForm;
