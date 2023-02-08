import React from 'react';

interface Props {
  value: string
}

const ButtonAuth: React.FC<Props> = (props) => {
  return (
    <input type="submit" value={props.value}  className='bg-indigo-600 hover:bg-indigo-800 text-white p-3 uppercase cursor-pointer'/>
  );
}

export default ButtonAuth;
