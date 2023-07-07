import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../About/About";
import Home from "../Home/Home/Home";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/home", element: <Home></Home> },
            { path: "/about", element: <About></About> },

        ]
    },
    { path: "*", element: <div>This Page is not found</div> }
   
])

export default routes;
