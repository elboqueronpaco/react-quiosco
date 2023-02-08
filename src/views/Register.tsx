import { Link } from "react-router-dom";
import { ContainerAuth } from "../components/ContainerAuth";
import ContainerFormAuth from "../components/ContainerFormAuth";
import { ContinerTitleForm } from "../components/ContinerTitleForm";
import { FormRegister } from "../components/FormRegister";
import NavAuth from "../components/NavAuth";
import { TitleAuthForm } from "../components/TitleAuthForm";

export const Register = () => {
  return (
    <ContainerAuth>
      <ContinerTitleForm title="Crea tu Cuenta" subtitle="Crea tu cuenta llenando el formulario"/>
      <ContainerFormAuth>
        <FormRegister />
      </ContainerFormAuth>
      <NavAuth to='/auth/login' linkText="¿Ya tienes cuenta? Inicia Sessión"/>
    </ContainerAuth>
  );
}