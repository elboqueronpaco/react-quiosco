import React, { useState, useEffect } from 'react'
import { formatearEuro } from '../../helpers'
import useQuisco from '../../hooks/useQuiosco'

const ModalProduct = () => {
  const [cantidad, setCantidad] = useState(1)
  const [edicion, setEdicion] = useState(false)
  const { producto, handleClickModal, handleAgregarPedido, pedido } = useQuisco()
  useEffect(()=>{
    if(pedido.some(pedidoState => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0]
      setCantidad(productoEdicion.cantidad)
      setEdicion(true)
    }
  },[pedido])
  return (
    <div className='md:flex gap-10'>
      <div className="md:w-1/3">
        <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen producto ${producto.nombre}`} />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-red-600 text-white">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="text-5xl m-5 from-black text-amber-500">{formatearEuro(producto.precio)}</p>
        <div className="flex gap-4 mt-5">
          <button onClick={() =>{
            if(cantidad <= 1) return
            setCantidad(cantidad - 1)
            
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button onClick={() =>{
            if(cantidad >= 5) return
            setCantidad(cantidad + 1)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path  fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <button onClick={() => handleAgregarPedido({...producto, cantidad})} className='bg-indigo-600 hover:bg-indigo-800 p-2 mt-5 text-white font-bold uppercase rounded'>
          {edicion === true ? 'Guardar Cambio' : 'Añadir al Pedido'}
        </button>
      </div>
    </div>
  )
}

export default ModalProduct
