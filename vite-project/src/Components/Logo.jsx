import {NavLink} from "react-router";

function Logo() {
    return (
        <div className="logo">
            <NavLink to="/"><img src='./public/Image/argentBankLogo.png' alt='logo' /></NavLink>
        </div>
    )
}

export default Logo;