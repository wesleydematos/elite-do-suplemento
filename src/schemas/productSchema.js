import * as yup from "yup"

export const productSchema = yup.object().shape({
  name: yup
  .string()
  .required("Nome obrigatório!"),
  imageURL: yup
  .string()
  .required("Url da imagem obrigatória!")
  .test('isValidDomain', 'Domínio não permitido!', function (value){
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/
    const match = value.match(domainRegex)

    if (!match || !match[1]) {
      return false
    }

    const allowedDomains = [
      "www.gsuplementos.com.br",
      "gsuplementos.com.br",
      "lojamaxtitanium.vtexassets.com",
      "blackskullusa.vtexassets.com",
      "images.tcdn.com.br",
      "integralmedica.vteximg.com.br",
      "m.media-amazon.com",
      "acdn.mitiendanube.com",
      "down-br.img.susercontent.com",
      "a-static.mlcdn.com.br",
      "d2r9epyceweg5n.cloudfront.net",
      "i.imgur.com"
    ]

    return allowedDomains.includes(match[1])
  }),
  weight: yup
  .string()
  .required("Peso/Medida obrigatório!"),
  flavor: yup
  .string()
  .default("")
  .nullable(),
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
  type: yup
  .string()
  .required("Tipo obrigatório!")
})