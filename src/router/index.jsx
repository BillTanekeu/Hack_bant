import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import LogInStudent from '../pages/Login/LogInStudent';
import LoginPersonel from '../pages/Login/LoginPersonel';
  import App from "../App";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "about",
      element: <div className='flex justify-center'><h1>About</h1></div>,
    },
    {
      path:'AuthStudent',
      element: <LogInStudent />

    },
    {
      path:'AuthPersonal',
      element: <LoginPersonel />
    }
  ]);


  export default router;