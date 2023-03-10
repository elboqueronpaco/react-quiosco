import React from 'react'
import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { Resumen } from '../components/Resumen'
import { Sidebar } from '../components/Sidebar'
import useQuisco from '../hooks/useQuiosco'
import ModalProduct from '../components/modals/ModalProduct'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
Modal.setAppElement('#root')
export const Layout = () => {
  const { modal } = useQuisco()
  return (
    <>
      <div className='md:flex'>
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>
        <Resumen/>
      </div>
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </Modal>
        <ToastContainer />
    </>
  )
}


