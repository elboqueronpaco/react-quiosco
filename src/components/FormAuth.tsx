import React, { Children } from 'react';

interface Props {
  children: React.ReactNode
}

 export const FormAuth: React.FC<Props> = (props) => {
  return (
    <form className='grid grid-cols-1 gap-6'>
      {props.children}
    </form>
  );
}


