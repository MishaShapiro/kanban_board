import { useState } from "react"
import dropdown_svg from "../../../svg/DropDown.svg"
import DropDownElement from "../DropDownElement/DropDownElement"
import "./DropDownInput.css"

const DropDownInput = function ({inputValue, setInputValue, data}) {

    const [isClick, changeClickState] = useState(false)

    return (
        <div className="task_main_container dropdown_input" onClick={() => {changeClickState(!isClick)}}>
            <p>{inputValue.title}</p>
            <img src={dropdown_svg} alt="DropDown.svg" />
            {isClick ?
            <ul className="dropdown_list">
                {data.map((elem) => {
                    return <DropDownElement element={elem.title} clickFunc={() => {setInputValue(elem)}}/>
                })}
            </ul>
            :
            <></>
            }
        </div>
    )
}

export default DropDownInput