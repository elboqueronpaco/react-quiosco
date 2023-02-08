import React from 'react';

interface Props {
 type: string
 id: string
 name: string
 labelText: string
 value?: string
 placeholder?: string
 onChange?: (e:any)=>void
}

const GroupInput: React.FC<Props> = ({type, id, labelText, name, placeholder, value, onChange}) => {
  return (
    <div className='mb-4 grid grid-cols-1 gap-3'>
      <label htmlFor={id} className='text-slate-800'>{labelText}</label>
      <input
       type={type}
       id={id} 
       name={name}
       placeholder={placeholder} 
       value={value} 
       onChange={onChange}
       className='p-3 bg-gray-100'
      />
    </div>
  );
}

export default GroupInput;
