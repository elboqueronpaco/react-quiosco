import React from 'react'
import useQuisco from '../hooks/useQuiosco'
import ResumenProducto from './products/ResumenProducto'

export const Resumen = () => {
  const {pedido} = useQuisco()
  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className="text-4xl font-bold">Mi Pedido</h1>
      <p className="text-lg my-5">
        Aqui podrás ver el resumén y totales de tu pedido
      </p>
      <div className="p-10">
        {pedido.length === 0 ?(
          <p className="text-center text-2xl">
            No hay elementos en tu pedido aún
          </p>
        ):(
          pedido.map( producto => (
            <ResumenProducto producto={producto}  key={producto.id}/>
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {''}
      </p>
      <form className="w-full">
        <div className="mt-5">
          <input
           type="submit"
           className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase 
           font-bold text-white text-center w-full cursor-pointer'
           value="Confirmar Pedido" 
          />
        </div>
      </form>
    </aside>
  )
}

