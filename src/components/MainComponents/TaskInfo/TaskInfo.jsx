import "./TaskInfo.css"
import cross from "../../../svg/cross.svg"
import { useNavigate } from "react-router-dom"

const TaskInfo = function ({status, item, data, setData}) {
    const navigate = useNavigate()
    return (
        <main className="main">
            <div className="task_info">
                <div className="task_name">
                    {item.title}
                </div>
                <textarea className="task_description" onChange={(e) => {
                    data[status] = data[status].filter((element) => {
                        return element.id != item.id
                    })
                    item.description = e.target.value
                    data[status].push(item)
                    const newData = data
                    setData(newData)
                    localStorage.setItem("localdata", JSON.stringify(newData))
                }}>
                    {item.description}
                </textarea>
                <button className="cross_btn" onClick={() => {navigate("/")}}>
                    <img className="cross" src={cross} alt="cross.svg" />
                </button>
            </div>
        </main>
    )
}

export default TaskInfo