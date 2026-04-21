import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";

function EditUserInput({user, first, last}) {
    return (
        <div className="EditUserContainer">
            <Input title="User Name: " placeholder={user} type="Text"/>
            <Input title="First Name: " placeholder={first} type="Text"/>
            <Input title="Last Name: " placeholder={last} type="Text"/>
            <div className="button-group">
                <Button title="Cancel"/>
                <Button title="Save"/>
            </div>
        </div>
    )
}

    export default EditUserInput;