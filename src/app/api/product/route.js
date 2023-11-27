import prisma from "../../../../lib/db"
import {NextResponse} from "next/server"

export async function GET(){
  try {
    const products = await prisma.product.findMany()

    return Response.json(products)
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }  
} 

export async function POST(req){
  const body = await req.json()

  try {
    const product = await prisma.product.create({
      data: {
        ...body
      }
    })
    
    return Response.json(product)
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }
} 

export async function DELETE(req){
  try {
    const { id } = await req.json()
    await prisma.product.delete({
      where: {
        id
      }
    })

    return NextResponse.json({message: "Produto deletado com sucesso!"})
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }
}