import React from 'react';

interface Props {
 title: string
}

export const TitleAuthForm: React.FC<Props> = (props) => {
  return (
    <h1 className='text-4xl font-black'>
      {props.title}
    </h1>
  );
}


