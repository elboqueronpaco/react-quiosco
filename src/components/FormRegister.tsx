import React from 'react'
import ButtonAuth from './ButtonAuth'
import { FormAuth } from './FormAuth'
import GroupInput from './GroupInput'

export const FormRegister = () => {
  return (
    <FormAuth>
      <GroupInput type={'text'} id={'name'} name={'name'} labelText={'Nombre: '} placeholder='Tu nombre' />
      <GroupInput type={'email'} id={'email'} name={'email'} labelText={'Correo: '} placeholder='Tu Correo' />
      <GroupInput type={'password'} id={'password'} name={'password'} labelText={'Contraseña: '} placeholder='Tu Contraseña' />
      <GroupInput type={'password'} id={'password_confirmation'} name={'password_confirmation'} labelText={'Confirmar Contraseña: '} placeholder='Repite tu contraseña' />
      <ButtonAuth value='Crear Cuenta'/>
    </FormAuth>
  )
}


