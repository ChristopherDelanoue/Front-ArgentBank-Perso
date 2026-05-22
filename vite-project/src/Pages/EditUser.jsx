import LogedBanner from "../Container/LogedBanner.jsx";
import Title from "../Components/Title.jsx";
import EditUserInput from "../Container/EditUserInput.jsx";
import Footer from "../Components/Footer.jsx";
import OperationContainer from "../Container/OperationContainer.jsx";
import {useSelector, useDispatch} from "react-redux";
import {Navigate } from "react-router";
import {apiUserInfo} from "../Api/Api.js";
import {useEffect} from "react";
import {setToken} from "./SigninSlice.js";
function EditUser() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);

    //recupération du profil si token et pas de user
    useEffect(() => {
        if (token && !user) {
            const getData = async () => {
                try {
                    const userDetail = await apiUserInfo(token);
                    dispatch(setToken({token, user:userDetail}));
                } catch {
                    console.log("error getData dans le edit user");
                }
            }
            getData();
        }
    }, [token, user]);

    if (!token) {
        return <Navigate to="/" />;
    } if (!user) {
        return <div>Loading profile...</div>;
    }
    return (
        <>
            <LogedBanner />
            <Title title="Edit User Information" />
            <EditUserInput user={user.userName} last={user.lastName} first={user.firstName} />
            <OperationContainer />
            <Footer />
        </>

    )
}

export default EditUser;