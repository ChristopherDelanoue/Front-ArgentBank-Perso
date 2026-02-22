function Input({type, title, onChange}) {
    return (
        <div className="input-container">
            <label>{title}</label>
            <input type={type} onChange={onChange} />
        </div>
    )
}

export default Input;