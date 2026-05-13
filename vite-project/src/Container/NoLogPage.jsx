import React from 'react';
import Header from "./Header.jsx";
import Footer from "../Components/Footer.jsx";

const NoLogPage = () => {
    return (
        <div>
            <Header />
            <div className='noLoginContainer'>
                <h1>Oups.....</h1>
                <p>Vous n'etes pas connecté, merci de vous identifier afin de conituer la navigation</p>
            </div>
            <Footer />
        </div>
    );
};

export default NoLogPage;