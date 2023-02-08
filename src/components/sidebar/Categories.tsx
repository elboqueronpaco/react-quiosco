import React from 'react'
import useQuisco from '../../hooks/useQuiosco'
import Category from './Category'

export const Categories = () => {
  const { categorias} = useQuisco()
  return (
    <div className='mt-10'>
      { categorias.map(categoria => (
        <Category key={categoria.id}
          id={categoria.id}
          icono={categoria.icono}
          nombre={categoria.nombre}
        />
      ))}
    </div>
  )
}


