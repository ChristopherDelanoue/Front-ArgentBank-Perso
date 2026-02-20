function CheckBox({title}) {
    return (
        <div className="CheckBox-Container">
            <input type="checkbox" name="remember"/>
            <label htmlFor="remember">{title}</label>
        </div>
    )
}

export default CheckBox;