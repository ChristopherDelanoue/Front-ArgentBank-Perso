import Input from '../Components/Input.jsx';
import Button from '../Components/Button.jsx';
import Checkbox from '../Components/Checkbox.jsx';
import signIn from "../Pages/SignIn.jsx";

function SignInContainer() {
    return (
        <div className="content">
            <div className="signInContainer">
                <i className="fa-solid fa-circle-user"></i>
                <h1>Sign In</h1>
                <Input type="Text" title="Username" />
                <Input type="Password" title="Password" />
                <Checkbox title="Remember me" />
                <Button title="Sign In" />
            </div>
        </div>
    )
}
export default SignInContainer