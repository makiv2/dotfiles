import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Error from "./pages/Error.tsx";
import Introduction from "./pages/Introduction.tsx";
import System from "./pages/System.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar></Navbar>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Introduction></Introduction>
            },
            {
                path: "system",
                element: <System/>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)
