import { useContext } from "react"
import "./Footer.css"
import { TasksContext } from "../../App"

const Footer = function () {

    const {data, setData} = useContext(TasksContext)

    return (
        <footer className="footer">
            <div className="counter">
                <p className="active_task">Active tasks: {data["Backlog"].length}</p>
                <p>Finished tasks: {data["Finished"].length}</p>
            </div>
            <div className="author">
                Kanban board by Mikhail Shapiro, 2023
            </div>
        </footer>
    )
}

export default Footer