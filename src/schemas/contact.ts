import * as yup from "yup";

export const schemaContact = yup.object().shape({
    receiver: yup.string().required("Usuario receptor requerido"),
    emisor: yup.string().required("Usuario emisor requerido."),
    message: yup.string()
      .min(10, 'El mensaje debe tener minimo 10 caracteres ')
      .max(255, 'El mensaje debe ser menor a 255 caracteres')
      .required("Mensaje requerido"),    
  }).required()