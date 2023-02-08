import React from 'react'
import { productos as data } from '../../data/productos'
import useQuisco from '../../hooks/useQuiosco'
import Product from './Product'

const Products = () => {
  const {categoriaActual} = useQuisco()
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)
  //console.log(productos)
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {
        productos.map( producto =>(
          <Product key={producto.id} producto={producto}/>
        ))
      }
    </div>
  )
}

export default Products
