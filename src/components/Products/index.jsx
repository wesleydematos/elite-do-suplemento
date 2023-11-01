import Card from "../Card";

export default function Products (){
  return (
    <section className="px-4 lg:px-6 xl:px-32 py-2" id="Produtos">
      <p>Produtos</p>
      <Card 
        name="Pré-Treino Horus" 
        imageURL="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/produto-principal.png"
        weight="150g"
        flavor="Frutas Vemelhas"
        brand="Max Titanium"
        price="70"
      />
    </section>
)
}