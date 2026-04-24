function TableauEnTete({ date, description, montant, balance, type, categorie, note, isData}) {
    return (
        <div className={`tableau-entete ${isData ? `green-bg` : ''}`}>
            <span className="col-date">{date}</span>
            <span className="col-description">{description}</span>
            <span className="col-amount">{montant}</span>
            <span className="col-balance">{balance}</span>
            <span className="col-chevron">{isData && <i className="fa-solid fa-chevron-right"></i>}</span>
        </div>
    )
}

export default TableauEnTete