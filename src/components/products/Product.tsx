import React from 'react';
import { formatearEuro } from '../../helpers';
import useQuisco from '../../hooks/useQuiosco';
import { ProductsInterface } from '../../interfaces/ProductsInterface';
import ImageProduct from './ImageProduct';

interface Props {
  producto: ProductsInterface

}

const Product: React.FC<Props> = ({producto}) => {
  const { handleClickModal, handleSetProducto} = useQuisco()
  return (
    <div className='border p-3 shadow bg-white'>
      <img className='w-full' src={`/img/${producto.imagen}.jpg`} alt={`imagen ${producto.nombre}`}/>
      <div className="p-5">
        <h3 className="text-2xl font-bold">{producto.nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatearEuro(producto.precio)}</p>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" onClick={ ()=> {
           handleClickModal()
           handleSetProducto(producto)
           //console.log(producto)
          }
            }>Agregar</button>
      </div>   
    </div>
  );
}

export default Product;
