import * as yup from 'yup';

const registerFormSchema = yup.object({
  fullName: yup
    .string()
    .required('Este campo es obligatorio')
    .min(6, 'Debe tener al menos 6 caracteres')
    .max(25, 'Máximo 25 caracteres'),
  email: yup
    .string()
    .email('Ingrese un email válido')
    .required('Este campo es obligatorio'),
  password: yup
    .string()
    .min(6, 'Debe tener al menos 6 caracteres')
    .required('Este campo es obligatorio'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Este campo es obligatorio'),
});

export default registerFormSchema;
