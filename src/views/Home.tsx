import React from 'react';
import Products from '../components/products/Products';
import useQuisco from '../hooks/useQuiosco';

export const Home = () => {
  const { categoriaActual } = useQuisco()
  
  return (
    <>
      <h1 className='text-4xl mt-10 font-black'>{categoriaActual.nombre}</h1>
      <p className='text-2xl mb-10 -scroll-my-10'>Elige y personaliza tu pedido a continuación</p>
      <Products />
    </>
  ); 
}


