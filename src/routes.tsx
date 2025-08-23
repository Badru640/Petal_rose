import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";

export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>,
      },
  
])