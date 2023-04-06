import Register from './Pages/Register';
import Login from './Pages/Login';
import Write from './Pages/Write';
import Home from './Pages/Home';
import Single from './Pages/Single';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Children } from 'react';

const Layout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/single",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
