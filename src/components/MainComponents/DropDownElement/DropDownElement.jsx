import "./DropDownElement.css"

const DropDownElement = function({element, clickFunc}) {
    return (
        <li onClick={clickFunc} className="dropdown_element">{element}</li>
    )
}

export default DropDownElement