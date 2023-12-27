import dropdown_svg from "../../../svg/DropDown.svg"

const DropDownInput = function () {
    return (
        <div className="task_main_container dropdown_input">
            <img src={dropdown_svg} alt="DropDown.svg" />
            <ul className="dropdown_list">

            </ul>
        </div>
    )
}

export default DropDownInput