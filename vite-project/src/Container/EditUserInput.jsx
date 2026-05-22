import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";
import {apiChangeUserName} from "../Api/Api.js";
import {setToken} from "../Pages/SigninSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";

function EditUserInput({user, first, last}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const userNameRegister = useSelector((state) => state.auth.user.userName);
    const [username, setUsername] = useState(userNameRegister);
    console.log(token)
    const handleSave = async (e) => {
        try {
            e.preventDefault();
            const update = await apiChangeUserName(token, username);
            dispatch({token, username: update});
            navigate('/user');
        } catch (error) {
            console.log("Erreur :", e.message);
        }
    };
    return (
        <div className="EditUserContainer">
            <Input title="User Name: " value={username} onChange={(e) => setUsername(e.target.value)} type="Text"/>
            <Input title="First Name: " placeholder={first} type="Text" disabled={true}/>
            <Input title="Last Name: " placeholder={last} type="Text" disabled={true}/>
            <div className="button-group">
                <Button title="Cancel"/>
                <Button title="Save" onclick={handleSave} />
            </div>
        </div>
    )
}

    export default EditUserInput;