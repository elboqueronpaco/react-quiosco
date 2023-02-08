import { Link } from "react-router-dom";
import { ContainerAuth } from "../components/ContainerAuth";
import ContainerFormAuth from "../components/ContainerFormAuth";
import { ContinerTitleForm } from "../components/ContinerTitleForm";
import { FormLogin } from "../components/FormLogin";
import NavAuth from "../components/NavAuth";

export const Login = () => {
  return (
    <ContainerAuth>
      <ContinerTitleForm title={"Iniciar Sessión"} subtitle={"Para realizar tu pedido tienes iniciar sessión"}/> 
      <ContainerFormAuth>
        <FormLogin />
      </ContainerFormAuth>
      <NavAuth to='/auth/register' linkText="¿No tienes cuenta? Crea una" />
    </ContainerAuth>
  );
}