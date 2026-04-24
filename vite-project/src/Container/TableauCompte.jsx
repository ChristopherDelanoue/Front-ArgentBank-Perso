import TableauEnTete from "../Components/TableauEnTete.jsx";

function TableauCompte() {
    const operationDetail = [
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true},
        {date: "2021-01-01", description: "Description 1", montant: "230,00€", balance: "12 324,23€", type: "Electronique", category: "Food", note: "c'était peut etre bon", data: true}
    ]
    return (
        <>
            <TableauEnTete date="Date" description= "Description" montant="Montant" balance="Balance"/>
            {operationDetail.map((item, index) => {
                return (
                    <TableauEnTete key={index} date={item.date} description={item.description} montant={item.montant} balance={item.balance} note={item.note} categorie={item.category} type={item.type} isData={item.data} />
                )
            })}
        </>
    )
}

export default TableauCompte