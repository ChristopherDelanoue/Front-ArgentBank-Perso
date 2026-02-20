import Feature from '../Components/Feature.jsx';
import Banner from '../Components/Banner.jsx';

const homeContainer = [
    {"logo": "icon-chat.png", "title": "You are our #1 priority", "description": "Need to talk to a representative? You can get in touch through our"},
    {"logo": "icon-money.png", "title": "More savings means higher rates", "description": "The more you save with us, the higher your interest rate will be!"},
    {"logo": "icon-security.png", "title": "Security you can trust", "description": "We use top of the line encryption to make sure your data and money is always safe."}
];

function Features() {
    return (
        <div className="Home-Container">
            <Banner />
            <div className="features-container">
                {homeContainer.map((feature, index) => (
                    <Feature key={index} logo={feature.logo} title={feature.title} description={feature.description} />
                ))}
            </div>

        </div>
    )
}

export default Features