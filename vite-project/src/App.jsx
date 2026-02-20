
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from '../src/Root.jsx'
import Home from '../src/Pages/Home.jsx'
import SignIn from '../src/Pages/SignIn.jsx'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/signin',
                    element: <SignIn />
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
}

export default App
