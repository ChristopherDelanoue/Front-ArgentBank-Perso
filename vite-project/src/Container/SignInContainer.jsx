import Input from '../Components/Input.jsx';
import Button from '../Components/Button.jsx';
import Checkbox from '../Components/Checkbox.jsx';
import {apiLogin} from '../Api/Api.js'
import {useState} from "react";

function SignInContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        try {
            await apiLogin(email, password);
            console.log('connexion reussie');
        } catch (error) {
            console.log(error);
        }
    }
    return (
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
    )
}
export default SignInContainer