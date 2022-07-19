import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    username: yup.string().min(6, "Ingrese al menos 6 caracteres").required("Usuario requerido"),
    password: yup.string().min(6, "Ingrese al menos 6 caracteres").required("Constraseña requerido."),
    email: yup.string().email( "Debe ser un correo").required("Correo requerido.")
  }).required();
