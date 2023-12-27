import { useState } from "react"
import "./Header.css"
import user_avatar from "../../svg/user-avatar.svg"
import arrow_up from "../../svg/arrow-up.svg"

const Header = function () {
    const [isOpen, setOpen] = useState(false)
    const changeOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <header className="header">
            <div className="name">Awesome Kanban Board</div>
            <div className="user_logo">
                <img src={user_avatar} alt="user-avatar.svg" />
                <button className="user_logo_btn" onClick={changeOpen}>
                    <img src={arrow_up} alt="arrow-up.svg" />
                </button>
                {isOpen ? 
                <div className="dropdown_header">
                    <div className="square"></div>
                    <ul className="dropdown_header_elements">
                        <li className="header_element" onClick={changeOpen}>Profile</li>
                        <li className="header_element" onClick={changeOpen}>Log Out</li>
                    </ul>
                </div>
                :
                <></>}
            </div>
        </header>
    )
}

export default Header