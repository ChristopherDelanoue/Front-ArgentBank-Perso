import Header from '../Container/Header.jsx';
import Banner from '../Components/Banner.jsx';
import Footer from '../Components/Footer.jsx';
import Features from '../Container/Features.jsx';
function Home() {
    return (
        <div className='Home'>
            <Header />
            <Banner />
            <Features />
            <Footer />
        </div>
    )
}

export default Home;