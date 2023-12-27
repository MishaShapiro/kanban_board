import "./TaskStatus.css"

const TaskStatus = function({name}) {
    return (
        <div class="task_status">
            <div class="task_name">
                {name}
            </div>
            <div class="task_main">
                
            </div>
            <div class="task_add">
                <button class="button">
                    Add card
                </button>
            </div>
            <div class="task_add">
                <button class="submit_button">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default TaskStatus