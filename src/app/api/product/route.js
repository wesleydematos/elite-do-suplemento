import prisma from "../../../../lib/db"
import {NextResponse} from "next/server"

export async function GET(){
  try {
    const products = await prisma.product.findMany()

    return NextResponse.json(products)
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
    
    return NextResponse.json(product)
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
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }
}

export async function PATCH(req){
  try {
    const body = await req.json()
    const {id, ...data} = body
    
    const product = await prisma.product.update({
      where: {
        id
      },
      data
    })

    return NextResponse.json({product})
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