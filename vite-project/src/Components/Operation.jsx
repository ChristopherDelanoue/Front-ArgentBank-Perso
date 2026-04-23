function Operation() {
    const compteList = [
        {title: "compte un", montant: "33 000,00€", balance: "Available Balance"},
        {title: "compte deux", montant: "-12 434,33€", balance: "Available Balance"},
        {title: "compte trois", montant: "53 098,10€", balance: "Available Balance"}
    ]
    return (
        <div className="operation-container">
            {compteList.map((item, index) => (
                <div className="operation-unitaire" key={index}>
                    <div className="operation-detail">
                        <h3>{item.title}</h3>
                        <h1>{item.montant}</h1>
                        <p>{item.balance}</p>
                    </div>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                ))}
        </div>
    )
}

export default Operation;