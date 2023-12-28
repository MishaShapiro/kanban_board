import "./TaskElement.css"
import { useNavigate } from "react-router-dom"

const TaskElement = function({name, element}) {

    const navigate = useNavigate()

    return (
        <div className="task_main_container" data-testid="testdiv" onClick={()=>{navigate("/" + name + "/" + element.id)}}>
            {element.title}
        </div>
    )
}

export default TaskElement