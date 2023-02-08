import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { Layout } from './layouts/Layout'
import Burger from './views/Burger'
import Cafe from './views/Cafe'
import Donas from './views/Donas'
import Galletas from './views/Galletas'
import { Home } from './views/Home'
import { Login } from './views/Login'
import Pasteles from './views/Pasteles'
import Pizzas from './views/Pizzas'
import { Register } from './views/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:'/Cafe',
        element: <Cafe />
      },
      {
        path: '/Hamburguesas',
        element: <Burger/>
      },
      {
        path: '/Pizzas',
        element: <Pizzas/>
      },
      {
        path: '/Donas',
        element: <Donas/>
      },
      {
        path: '/Pasteles',
        element: <Pasteles/>
      },
      {
        path: '/Galletas',
        element: <Galletas/>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { 
        path:'/auth/login',
        element: <Login/>
      },
      {
        path:'/auth/register',
        element:<Register/>
      }
    ]
  }
])

export default router