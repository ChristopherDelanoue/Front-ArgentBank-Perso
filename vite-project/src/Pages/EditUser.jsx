import LogedBanner from "../Container/LogedBanner.jsx";
import Title from "../Components/Title.jsx";
import EditUserInput from "../Container/EditUserInput.jsx";
import Footer from "../Components/Footer.jsx";
import OperationContainer from "../Container/OperationContainer.jsx";
import {useSelector} from "react-redux";
import {Navigate } from "react-router";
function EditUser() {

    const token = useSelector((state) => state.auth.token);
    console.log("VALEUR DU TOKEN ACTUEL :", JSON.stringify(token));

    if (!token || token === "" || token === "undefined") {
        console.log("Redirection activée !");
        return <Navigate to="/tokenless" />;
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