
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from '../src/Root.jsx'
import Home from '../src/Pages/Home.jsx'
import SignIn from '../src/Pages/SignIn.jsx'
import EditUser from "./Pages/EditUser.jsx";
import CompteDetail from "./Pages/CompteDetail.jsx";
import NoLogPage from "./Container/NoLogPage.jsx";

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
                },
                {
                    path: '/user',
                    element: <EditUser />
                },
                {
                    path: '/devDetail',
                    element: <CompteDetail />
                },
                {
                    path: '/tokenless',
                    element: <NoLogPage />
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
}

export default App
