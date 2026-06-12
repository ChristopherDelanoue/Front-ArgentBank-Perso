import Operation from "../Components/Operation.jsx";
import {useNavigate} from "react-router";

function OperationContainer() {
    const compteList = [
            {title: "compte un", montant: "33 000,00€", balance: "Available Balance"},
            {title: "compte deux", montant: "-12 434,33€", balance: "Available Balance"},
            {title: "compte trois", montant: "53 098,10€", balance: "Available Balance"}
        ]

    const navigate = useNavigate();

    const redirection = () => {
        navigate("/devDetail");
    }

    return (
        <div className="operation-container">
            {compteList.map((item, index) => (
                <Operation key={index} title={item.title} montant={item.montant} balance={item.balance} onClick={redirection} />
            ))}
        </div>
    )
}

export default OperationContainer