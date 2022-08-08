import * as yup from "yup";

export const schemaContact = yup.object().shape({
    userWholesaler: yup.string().required("Usuario requerido"),
    userFarmer: yup.string().required("Constraseña requerido."),
    message: yup.string().min(10, 'El mensaje debe tener minimo 25 caracteres ').required("Mensaje requerido"),
    products: yup.array().min(1, 'Debe seleccionar un producto como minimo').required('Debe seleccionar un producto como minimo')

  }).required()