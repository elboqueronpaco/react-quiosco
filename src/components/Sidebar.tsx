import React from 'react';
import { Categories } from './sidebar/Categories';
import { LogoSidebar } from './sidebar/LogoSidebar';

export const Sidebar = () => {
  return (
    <aside className='md:w-72'>
      <LogoSidebar/>
      <Categories/>
      <div className="my-5 px-5">
        <button className='text-center bg-red-500 w-full p-3 font-bold text-white truncate'>Cancelar Orden</button>
      </div>
    </aside>
  );
}

