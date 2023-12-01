import BlueButton from "../BlueButton"
import {productSchema} from "@/schemas/productSchema"
import axios from "axios"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {toast} from "react-toastify"

export default function ProductForm(){
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(productSchema)})

  async function handleCreate(data) {
    try {
      await axios.post("/api/product", data)
      toast.success("Produto adicionado com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao adicionar produto!")
    } 
  }

  return (
    <>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Adicionar novo produto:</h2>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="name">Nome</label>
          <input 
            {...register("name")}
            errors={errors.name}
            type="text" 
            placeholder="Whey Protein" 
            id="name"
          />
          {errors.name && <span className="text-secondary">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="imageURL">URL da imagem</label>
          <input 
            {...register("imageURL")}
            errors={errors.imageURL}
            type="text" 
            placeholder="https://..." 
            id="imageURL"
          />
          {errors.imageURL && <span className="text-secondary">{errors.imageURL.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="weight">Peso/Medida</label>
          <input 
            {...register("weight")}
            errors={errors.weight}
            type="text" 
            placeholder="150g" 
            id="weight"
          />
          {errors.weight && <span className="text-secondary">{errors.weight.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="flavor">Sabor</label>
          <input 
            {...register("flavor")}
            errors={errors.flavor}
            type="text"
            placeholder="Frutas vermelhas" 
            id="flavor"
          />
          {errors.flavor && <span className="text-secondary">{errors.flavor.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="description">Descrição</label>
          <input 
            {...register("description")}
            errors={errors.description}
            type="text" 
            placeholder="O produto contém..." 
            id="description"
          />
          {errors.description && <span className="text-secondary">{errors.description.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="whenToTake">Quando utilizar</label>
          <input 
            {...register("whenToTake")}
            errors={errors.whenToTake}
            type="text" 
            placeholder="O produto deve ser utilizado..." 
            id="whenToTake"
          />
          {errors.whenToTake && <span className="text-secondary">{errors.whenToTake.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="brand">Marca</label>
          <input 
            {...register("brand")}
            errors={errors.brand}
            type="text" 
            placeholder="Growth" 
            id="brand"
          />
          {errors.brand && <span className="text-secondary">{errors.brand.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="price">Preço</label>
          <input 
            {...register("price")}
            errors={errors.price}
            type="text" 
            placeholder="150" 
            id="price"
          />
          {errors.price && <span className="text-secondary">{errors.price.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary" htmlFor="type">Tipo</label>
          <select 
            {...register("type")}
            errors={errors.type}
            name="type" 
            id="type" 
          >
            <option value="preWorkout">Pré-treino</option>
            <option value="protein">Proteína</option>
            <option value="creatine">Creatina</option>
            <option value="others">Outros</option>
          </select>
          {errors.type && <span className="text-secondary">{errors.type.message}</span>}
        </div>
        <div className="my-2">
          <BlueButton type="submit">Adicionar</BlueButton>
        </div>
      </form>
    </>
  )
}