import * as yup from "yup"

export const productSchema = yup.object().shape({
  name: yup
  .string()
  .required("Nome obrigatório!"),
  imageURL: yup
  .string()
  .required("Url da imagem obrigatória!"),
  weight: yup
  .string()
  .required("Peso/Medida obrigatório!"),
  flavor: yup
  .string(),
  description: yup
  .string()
  .max(680, "Máximo de 680 caractéres!")
  .required("Descrição obrigatória!"),
  whenToTake: yup
  .string()
  .max(680, "Máximo de 680 caractéres!")
  .required("Quando utilizar obrigatório!"),
  brand: yup
  .string()
  .required("Marca obrigatória!"),
  price: yup
  .string()
  .required("Preço obrigatório!"),
})