import "./TaskStatus.css"

const TaskStatus = function({name}) {
    return (
        <div className="task_status">
            <div className="task_name">
                {name}
            </div>
            <div className="task_main">

            </div>
            <div className="task_add">
                <button className="button">
                    Add card
                </button>
            </div>
            <div className="task_add">
                <button className="submit_button">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default TaskStatus