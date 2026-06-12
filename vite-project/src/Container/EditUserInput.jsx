import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";
import { apiChangeUserName } from "../Api/Api.js";
import { updateUserName } from "../Redux/SigninSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function EditUserInput({ first, last }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const user = useSelector((state) => state.auth.user);
    const userNameRegister = user?.userName;

    const [username, setUsername] = useState("");

    const handleSave = async (e) => {
        try {
            e.preventDefault();
            const valueToSend = username.trim() === "" ? userNameRegister : username;
            const update = await apiChangeUserName(token, valueToSend);
            const newUserName = update?.userName;
            dispatch(updateUserName(newUserName));
            setUsername("");
        } catch (error) {
            console.log("Erreur :", error);
        }
    };

    return (
        <form className="EditUserContainer" onSubmit={handleSave}>
            <Input
                title="User Name: "
                placeholder={userNameRegister}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
            />
            <Input title="First Name: " placeholder={first} type="text" disabled={true}/>
            <Input title="Last Name: " placeholder={last} type="text" disabled={true}/>
            <div className="button-group">
                <Button title="Cancel" type="button"/>
                <Button title="Save" type="submit" />
            </div>
        </form>
    );
}

export default EditUserInput;