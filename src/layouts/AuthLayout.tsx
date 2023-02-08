import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export const AuthLayout = () => {
  return (
    <main className="max-w-4xl mx-auto mt-10 w-full md:mt-28 grid grid-cols-1 md:items-center  md:grid-cols-2 gap-4">
      <Logo />
      <div className="p-10 w-full ">
        <Outlet />
      </div>
    </main>
  );
}

