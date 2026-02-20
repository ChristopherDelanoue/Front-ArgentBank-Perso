import Header from '../Container/Header';
import Footer from '../components/Footer';
import SignInContainer from "../Container/SignInContainer.jsx";
function SignIn() {
    return (
        <div className="signInPage">
            <Header />
            <SignInContainer />
            <Footer />
        </div>
    )
}
export default SignIn;