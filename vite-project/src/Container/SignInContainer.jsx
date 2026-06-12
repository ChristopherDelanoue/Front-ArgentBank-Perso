import Input from '../Components/Input.jsx';
import Button from '../Components/Button.jsx';
import Checkbox from '../Components/Checkbox.jsx';
import {apiLogin} from '../Api/Api.js'
import {useState} from "react";
import Header from "./Header.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setToken } from "../Redux/SigninSlice.js";
function SignInContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const token = await apiLogin(email, password);
            dispatch(setToken(token));
            navigate('/user');
        } catch (error) {
            console.log("Erreur :", error.message);
            alert("Identifiants incorrects");
        }
    };
    return (
        <>
            <Header />
            <div className="content">
                <div className="signInContainer">
                    <i className="fa-solid fa-circle-user"></i>
                    <h1>Sign In</h1>
                    <Input type="Text" title="Username" onChange={e => setEmail(e.target.value)} />
                    <Input type="Password" title="Password" onChange={e => setPassword(e.target.value)} />
                    <Checkbox title="Remember me" />
                    <Button onclick={handleLogin} title="Sign In" />
                </div>
            </div>
        </>

    )
}
export default SignInContainer