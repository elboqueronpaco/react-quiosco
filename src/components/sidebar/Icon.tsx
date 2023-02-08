import React from 'react';

interface Props {
  icono: string
}

const Icon: React.FC<Props> = (props) => {
  return (
    <img src={`/img/icono_${props.icono}.svg`} alt="Imagen Icono" className='w-12' />
  );
}

export default Icon;
