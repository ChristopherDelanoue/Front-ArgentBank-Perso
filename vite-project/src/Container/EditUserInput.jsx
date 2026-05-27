import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";
import {apiChangeUserName} from "../Api/Api.js";
import {setToken, updateUserName} from "../Pages/SigninSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function EditUserInput({user, first, last}) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const userNameRegister = useSelector((state) => state.auth.user.userName);
    const [username, setUsername] = useState(userNameRegister);
    const handleSave = async (e) => {
        try {
            e.preventDefault();
            const update = await apiChangeUserName(token, username);
            const newUserName = update?.body?.userName;
            dispatch(updateUserName(newUserName));
            window.location.reload();
        } catch (error) {
            console.log("Erreur :", error);
        }
    };
    return (
        <div className="EditUserContainer">
            <Input title="User Name: " placeholder={userNameRegister}  onChange={(e) => setUsername(e.target.value)} type="Text"/>
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