function Button({title, onclick}) {
    return (
        <div className="button-Container">
            <button onClick={onclick} className="button" >{title}</button>
        </div>
    )
}

export default Button;