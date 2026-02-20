function Feature({logo, title, description}) {
    return (
        <div className="feature">
            <img src={`../public/Image/${logo}`} alt={`${logo}`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Feature;