import {Outlet} from "react-router";
import Header from "./Container/Header.jsx";
function Root() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Root;