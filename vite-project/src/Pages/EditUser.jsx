import LogedBanner from "../Container/LogedBanner.jsx";
import Title from "../Components/Title.jsx";
import EditUserInput from "../Container/EditUserInput.jsx";
import Footer from "../Components/Footer.jsx";
import Operation from "../Components/Operation.jsx";
import OperationContainer from "../Container/OperationContainer.jsx";
function EditUser() {

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