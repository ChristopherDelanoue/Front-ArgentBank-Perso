
import { useNavigate, NavLink} from "react-router";
import SignIn from "../Components/SignIn.jsx";
import {logout} from "../Pages/SigninSlice.js";
import logo from "../Components/Logo.jsx";
import {useDispatch} from "react-redux";
import Button from "../Components/Button.jsx";


function LogedBanner() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <div className="Loged-Banner-container">
            <NavLink to='/'><img src='./public/image/argentBankLogo.png' alt='Logo' /></NavLink>
            <div className="log-out">
                <SignIn name='TEST' />
                <Button title={<i className="fa-solid fa-gear"></i>} />
                <Button title={<i className="fa-solid fa-power-off"></i>} onclick={handleLogout} />
            </div>
        </div>
    )
}

export default LogedBanner;