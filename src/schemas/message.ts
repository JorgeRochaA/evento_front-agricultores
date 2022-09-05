import * as yup from "yup";

export const schemaMessage = yup.object().shape({
  textMessage: yup
    .string()
    .max(255, "El mensaje debe ser menor a 255 caracteres")
    .required("Mensaje requerido"),
});
