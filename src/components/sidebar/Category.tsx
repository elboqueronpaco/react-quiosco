import React from 'react';
import { Link } from 'react-router-dom';
import useQuisco from '../../hooks/useQuiosco';
import Icon from './Icon';

interface Props {
    id: number
    icono: string,
    nombre: string,
}

const Category: React.FC<Props> = ({icono, nombre,id}) => {
  const {handleClickCategoria, categoriaActual} = useQuisco()
  return (
    <button type='submit' onClick={()=>handleClickCategoria(id)} className={`${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      <Icon icono={icono} />
      <p className='text-lg font-bold truncate'>{nombre}</p>
    </button>

  ); 
}

export default Category;
