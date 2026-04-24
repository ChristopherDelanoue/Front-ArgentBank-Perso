import Operation from "../Components/Operation.jsx";

function OperationContainer() {
    const compteList = [
            {title: "compte un", montant: "33 000,00€", balance: "Available Balance"},
            {title: "compte deux", montant: "-12 434,33€", balance: "Available Balance"},
            {title: "compte trois", montant: "53 098,10€", balance: "Available Balance"}
        ]

    return (
        <div className="operation-container">
            {compteList.map((item, index) => (
                <Operation title={item.title} montant={item.montant} balance={item.balance} />
            ))}
        </div>
    )
}

export default OperationContainer