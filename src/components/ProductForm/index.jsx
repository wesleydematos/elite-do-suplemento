import BlueButton from "../BlueButton";

export default function ProductForm(){
  return (
    <>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Adicionar produto:</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="Whey Protein" id="name"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="imageURL">URL da imagem</label>
          <input type="text" placeholder="https://..." id="imageURL"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="weight">Peso/Medida</label>
          <input type="text" placeholder="150g" id="weight"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="flavor">Sabor</label>
          <input type="text" placeholder="Frutas vermelhas" id="flavor"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Descrição</label>
          <input type="text" placeholder="O produto contém..." id="description"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="whenToTake">Quando utilizar</label>
          <input type="text" placeholder="O produto deve ser utilizado..." id="whenToTake"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand">Marca</label>
          <input type="text" placeholder="Growth" id="brand"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Preço</label>
          <input type="text" placeholder="150" id="price"/>
        </div>
        <div className="my-2">
          <BlueButton type="submit">Criar</BlueButton>
        </div>
      </form>
    </>
  )
}