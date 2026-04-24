import LogedBanner from "../Container/LogedBanner.jsx";
import Footer from "../Components/Footer.jsx";
import Operation from "../Components/Operation.jsx";
import TableauCompte from "../Container/TableauCompte.jsx";

function CompteDetail() {
    return (
        <div className="compte-detail">
            <LogedBanner />
            <div className="operation-container">
                <Operation title="Compte Test" montant="123 123,12" balance="Balance Test"/>
            </div>
            <TableauCompte />
            <Footer/>
        </div>
    )
}

export default CompteDetail