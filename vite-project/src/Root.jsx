import {Outlet} from "react-router";
import Header from "./Container/Header.jsx";
function Root() {
    return (
        <>
            <Outlet />
        </>
    )
}
export default Root;