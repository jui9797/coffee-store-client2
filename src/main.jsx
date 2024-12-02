import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import { AuthProvider } from './components/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'/signUp',
    element:<SignUp></SignUp>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  },
  {
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
