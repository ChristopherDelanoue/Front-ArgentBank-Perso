function Feature({image, title, description}) {
    return (
        <div className="feature">
            <img src={`../assets/Image/icon-${image}.png`} alt={`ìcon ${image}`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Feature;