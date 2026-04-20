import {NavLink} from "react-router";
function SignIn({name}) {
    return (
        <NavLink to="/signin" className='SignInDiv'>
            <i className="fa-solid fa-circle-user"></i>
            <h4 className='SignIn'>{name}</h4>
        </NavLink>
    )
}

export default SignIn