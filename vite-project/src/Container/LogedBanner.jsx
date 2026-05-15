
import { useNavigate, NavLink} from "react-router";
import SignIn from "../Components/SignIn.jsx";
import {logout} from "../Pages/SigninSlice.js";
import logo from "../Components/Logo.jsx";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Components/Button.jsx";


function LogedBanner() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    const user = useSelector((state) => state.auth.user);
    return (
        <div className="Loged-Banner-container">
            <NavLink to='/'><img src='./public/image/argentBankLogo.png' alt='Logo' /></NavLink>
            <div className="log-out">
                <SignIn name={`${user.firstName} ${user.lastName}`} />
                <Button title={<i className="fa-solid fa-gear"></i>} />
                <Button title={<i className="fa-solid fa-power-off"></i>} onclick={handleLogout} />
            </div>
        </div>
    )
}

export default LogedBanner;