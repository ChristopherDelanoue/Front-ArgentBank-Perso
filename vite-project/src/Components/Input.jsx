function Input({type, title, placeholder, value, disabled ,onChange}) {
    return (
        <div className="input-container">
            <label>{title}</label>
            <input type={type} placeholder={placeholder} value={value} disabled={disabled} onChange={onChange} />
        </div>
    )
}

export default Input;