import React from 'react';

interface Props {
  nombre: string
  imagen: string
}

const ImageProduct: React.FC<Props> = (props) => {
  return (
    <img className='w-full' src={`/img/${props.imagen}.jpg`} alt={`imagen ${props.nombre}`}/>
  );
}

export default ImageProduct;
