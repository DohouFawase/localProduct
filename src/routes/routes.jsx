import { createBrowserRouter } from "react-router-dom";
import Landing from "../layout/landing";
import Page from "../pages/page";



const root = createBrowserRouter([
   {
    path:'/',
    element: <Landing />,
    children:[
        {
            path:'',
            element:<Page />
        }
    ]
   }
])

export default root