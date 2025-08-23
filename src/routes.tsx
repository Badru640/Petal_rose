import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/pagina_in";
import Rosas from "./pages/rosas";
import { Contacto } from "./pages/contacto";

export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/rosas",
        element:<Rosas/>,
      },
      {
        path:"/contacto",
        element:<Contacto/>,
      },
  
])