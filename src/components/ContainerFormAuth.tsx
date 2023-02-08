import React, { Children } from 'react';

interface Props {
  children: React.ReactNode
}

const ContainerFormAuth: React.FC<Props> = (props) => {
  return (
    <div className='bg-white w-full shadow-md rounded-md mt-10 px-5 py-10'>
      {props.children}
    </div>
  );
}

export default ContainerFormAuth;
