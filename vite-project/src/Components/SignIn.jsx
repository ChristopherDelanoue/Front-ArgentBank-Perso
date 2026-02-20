import {NavLink} from "react-router";
function SignIn() {
    return (
        <NavLink to="/signin" className='SignInDiv'>
            <i className="fa-solid fa-circle-user"></i>
            <h4 className='SignIn'>Sign In</h4>
        </NavLink>
    )
}

export default SignIn