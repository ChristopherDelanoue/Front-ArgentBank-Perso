function Input({type, title}) {
    return (
        <div className="input-container">
            <label>{title}</label>
            <input type={type} />
        </div>
    )
}

export default Input;