import LogedBanner from "../Container/LogedBanner.jsx";
import Title from "../Components/Title.jsx";
import EditUserInput from "../Container/EditUserInput.jsx";
import Footer from "../Components/Footer.jsx";
import OperationContainer from "../Container/OperationContainer.jsx";
import {useSelector} from "react-redux";
import {Navigate } from "react-router";
function EditUser() {

    const token = useSelector((state) => state.auth.token);
    if (!token || token === "" || token === "undefined") {
        return <Navigate to="/" />;
    }
    return (
        <>
            <LogedBanner />
            <Title title="Edit User Information" />
            <EditUserInput user="test" last="last test" first="first test" />
            <OperationContainer />
            <Footer />
        </>

    )
}

export default EditUser;