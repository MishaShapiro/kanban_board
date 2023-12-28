import "./TaskInput.css"

const TaskInput = function({setInputValue}) {
    return (
        <input onChange={(e) => {setInputValue(e.target.value)}} className="input" type="text" placeholder="Add new"/>
    )
}

export default TaskInput