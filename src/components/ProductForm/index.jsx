"use client"

import BlueButton from "../BlueButton"
import {productSchema} from "@/schemas/productSchema"
import axios from "axios"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {toast} from "react-toastify"
import {useProductStore} from "@/store/zustand"

export default function ProductForm({handleType}){
  const {product, setAllProducts, setEdit} = useProductStore()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(productSchema)})

  async function getData(){
    const {data} = await axios.get("/api/product")
    setAllProducts(data)
  }

  async function handleCreate(data) {
    try {
      await axios.post("/api/product", data)
      toast.success("Produto adicionado com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao adicionar produto!")
    } 
  }

  async function handleEdit(data) {
    try {
      await axios.patch("/api/product", {...data, id: product.id})
      toast.success("Produto editado com sucesso!")
      getData()
      setEdit(false)
    } catch (error) {
      console.log(error)
      toast.error("Erro ao editar produto!")
    } 
  }

  const handleFunc = handleType == "create" ? handleCreate : handleEdit

  return (
    <>
      <h2 className="font-bold text-base my-2 border-b-2 border-secondary w-fit text-primary">
        {handleType == "create" ? "Adiconando produto:" : "Editando " + product.name + " " + product.brand}
      </h2>
      <form onSubmit={handleSubmit(handleFunc)}>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="name">Nome</label>
          <input 
            defaultValue={product.name || ""}
            {...register("name")}
            errors={errors.name}
            type="text" 
            placeholder="ex: Whey Protein" 
            className="h-[35px] text-black"
            id="name"
          />
          {errors.name && <span className="text-secondary">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="imageURL">URL da imagem</label>
          <input 
            defaultValue={product.imageURL || ""}
            {...register("imageURL")}
            errors={errors.imageURL}
            type="text" 
            placeholder="ex: https://..." 
            className="h-[35px] text-black"
            id="imageURL"
          />
          {errors.imageURL && <span className="text-secondary">{errors.imageURL.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="weight">Peso/Medida</label>
          <input 
            defaultValue={product.weight || ""}
            {...register("weight")}
            errors={errors.weight}
            type="text" 
            placeholder="ex: 150g" 
            className="h-[35px] text-black"
            id="weight"
          />
          {errors.weight && <span className="text-secondary">{errors.weight.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="flavor">Sabor</label>
          <input 
            defaultValue={product.flavor || ""}
            {...register("flavor")}
            errors={errors.flavor}
            type="text"
            placeholder="ex: Frutas vermelhas" 
            className="h-[35px] text-black"
            id="flavor"
          />
          {errors.flavor && <span className="text-secondary">{errors.flavor.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="description">Descrição</label>
          <input 
            defaultValue={product.description || ""}
            {...register("description")}
            errors={errors.description}
            type="text" 
            placeholder="ex: O produto contém..." 
            className="h-[35px] text-black"
            id="description"
          />
          {errors.description && <span className="text-secondary">{errors.description.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="whenToTake">Quando utilizar</label>
          <input 
            defaultValue={product.whenToTake || ""}
            {...register("whenToTake")}
            errors={errors.whenToTake}
            type="text" 
            placeholder="ex: O produto deve ser utilizado..." 
            className="h-[35px] text-black"
            id="whenToTake"
          />
          {errors.whenToTake && <span className="text-secondary">{errors.whenToTake.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="type">Tipo</label>
          <select 
            defaultValue={product.type || ""}
            {...register("type")}
            errors={errors.type}
            name="type" 
            id="type" 
            className="h-[35px] text-black"
          >
            <option value="preWorkout">Pré-treino</option>
            <option value="protein">Proteína</option>
            <option value="creatine">Creatina</option>
            <option value="others">Outros</option>
          </select>
          {errors.type && <span className="text-secondary">{errors.type.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="brand">Marca</label>
          <input 
            defaultValue={product.brand || ""}
            {...register("brand")}
            errors={errors.brand}
            type="text" 
            placeholder="ex: Growth" 
            className="h-[35px] text-black"
            id="brand"
          />
          {errors.brand && <span className="text-secondary">{errors.brand.message}</span>}
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-medium text-primary text-[14px]" htmlFor="price">Preço</label>
          <input 
            defaultValue={product.price || ""}
            {...register("price")}
            errors={errors.price}
            type="text" 
            placeholder="ex: 150" 
            className="h-[35px] text-black"
            id="price"
          />
          {errors.price && <span className="text-secondary">{errors.price.message}</span>}
        </div>
        
        <div className="my-2">
          <BlueButton type="submit">{handleType == "create" ? "Adicionar" : "Editar"}</BlueButton>
        </div>
      </form>
    </>
  )
}