export const formatearEuro = (cantidad: number) =>{
  return cantidad.toLocaleString('es',{
    style: 'currency',
    currency: 'EUR'
  })
}