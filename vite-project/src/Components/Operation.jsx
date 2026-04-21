function Operation({nom, montant, balance}) {
    return (
        <div className="operation-container">
            <div className="operation-unitaire">
                <div className="operation-detail">
                    <h3>{nom}</h3>
                    <h1>{montant}</h1>
                    <p>{balance}</p>
                </div>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Operation;