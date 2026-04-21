
import {NavLink} from "react-router";
import SignIn from "../Components/SignIn.jsx";

function LogedBanner() {
    return (
        <div className="Loged-Banner-container">
            <img src='./public/image/argentBankLogo.png' alt='Logo' />
            <div className="log-out">
                <SignIn name='TEST' />
                <NavLink><i className="fa-solid fa-gear"></i></NavLink>
                <NavLink><i className="fa-solid fa-power-off"></i></NavLink>
            </div>
        </div>
    )
}

export default LogedBanner;