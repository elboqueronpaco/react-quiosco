import React, { createContext, FC, useState } from "react";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";
import { categorias as categoriasDB } from "../data/categorias";
import { ProductsInterface } from "../interfaces/ProductsInterface";
import { productos as productosDB } from "../data/productos";
import { toast } from "react-toastify";
interface defaultQuiosco  { 
  categorias: CategoriesInterface[]
  categoriaActual: CategoriesInterface
  producto: any
  modal: boolean
  pedido: any[]
  handleClickCategoria: (id: number) => void
  handleClickModal: () => void
  handleSetProducto: (producto: ProductsInterface) => void
  handleAgregarPedido: (producto:any) => void
}
const QuioscoContext = createContext({} as defaultQuiosco)
interface QuioscoProviderProp {
  children: React.ReactNode
}
const QuioscoProvider:FC<QuioscoProviderProp> = ({children}) =>{
  const [categorias, setCategorias] = useState(categoriasDB)
  const [categoriaActual, setCategoriaActual] = useState(categorias[0])
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})
  const [pedido, setPedido] = useState<any[]>([])

  const handleClickCategoria = (id: number) => {
    const categoria = categorias.filter(categoria =>categoria.id === id)[0]
    setCategoriaActual(categoria)
    //console.log(categoria)
  }
  const handleClickModal = () => {
    setModal(!modal)
  }
  const handleSetProducto = (producto: ProductsInterface) => {
    setProducto(producto)
  }
  const handleAgregarPedido = ({categoria_id , imagen, ...producto}:ProductsInterface) => {
    if(pedido.some(pedidoState => pedidoState.id === producto.id)){
      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
      setPedido(pedidoActualizado)
      toast.success('actualizado correctamente el pedido')
      setModal(false)
    } else{
      setPedido([...pedido,producto])
      toast.success('agregado al pedido')
      setModal(false)
    }
  }
  return(
    <QuioscoContext.Provider
    value={{ 
        categorias,
        categoriaActual,
        modal,
        producto,
        pedido,
        handleClickCategoria,
        handleClickModal,
        handleSetProducto,
        handleAgregarPedido
     }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export { QuioscoProvider}

export default QuioscoContext