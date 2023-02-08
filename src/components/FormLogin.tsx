import React from 'react'
import ButtonAuth from './ButtonAuth'
import { FormAuth } from './FormAuth'
import GroupInput from './GroupInput'

export const FormLogin = () => {
  return (
    <FormAuth>
      <GroupInput type={'email'} id={'email'} name={'email'} labelText={'Correo: '} placeholder='Tu Correo' />
      <GroupInput type={'password'} id={'password'} name={'password'} labelText={'Contraseña: '} placeholder='Tu Contraseña' />
      <ButtonAuth value='Iniciar Sessión'/>
    </FormAuth>
  )
}


