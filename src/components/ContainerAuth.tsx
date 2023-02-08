import React, { Children } from 'react';

interface Props {
  children: React.ReactNode
}

 export const ContainerAuth: React.FC<Props> = (props) => {
  return (
    <div className='grid grid-cols-1 w-full gap-4'>
      {props.children}
    </div>
  );
}


