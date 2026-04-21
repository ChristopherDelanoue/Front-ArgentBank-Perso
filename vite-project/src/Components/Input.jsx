function Input({type, title, placeholder ,onChange}) {
    return (
        <div className="input-container">
            <label>{title}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Input;