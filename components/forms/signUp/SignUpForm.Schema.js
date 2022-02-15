import * as yup from 'yup';

const signUpFormSchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido')
    .min(4, 'Debe tener al menos 4 caracteres'),
  hoster: yup
    .string()
    .required('La organización es requerida')
    .min(3, 'Debe contener al menos 3 caracteres'),
  description: yup
    .string()
    .required('La descripción es requerida')
    .min(10, 'Debe contener al menos 3 caracteres'),
  date: yup.object({
    start: yup.date().required('La fecha de inicio es requerida'),
    end: yup.date().required('La fecha de fin es requerida'),
  }),
  tags: yup.array().of(
    yup.object().shape({
      name: yup.string(),
    }),
  ),
  target: yup.object().shape({
    directedTo: yup
      .string()
      .required('Este campo es requerido')
      .min(4, 'Debe contener al menos 4 caracteres'),
    fromUniversity: yup
      .string()
      .required('Este campo es requerido')
      .min(4, 'Debe contener al menos 4 caracteres'),
  }),
  duration: yup.string().required('La duración de la beca es requerido'),
  spots: yup
    .string()
    .required('El número de plazas es requerida')
    .test('is-num-greater-than-1', 'Las plazas deben ser mayores a 0', val => {
      return parseInt(val, 10) > 0;
    }),
  requirements: yup.object().shape({
    title: yup.string(),
    list: yup.array().of(
      yup.object().shape({
        item: yup.string(),
      }),
    ),
  }),
});

export default signUpFormSchema;
