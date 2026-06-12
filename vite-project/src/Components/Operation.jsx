function Operation({title, montant, balance, onClick}) {
    return (
        <div className="operation-unitaire" onClick={onClick}>
            <div className="operation-detail">
                <h3>{title}</h3>
                <h1>{montant}</h1>
                <p>{balance}</p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    )
}

export default Operation;