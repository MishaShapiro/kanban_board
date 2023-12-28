import "./TaskStatus.css"
import TaskElement from "../TaskElement/TaskElement"
import { useContext, useEffect, useRef, useState } from "react"
import { TasksContext } from "../../../App"
import TaskInput from "../TaskInput/TaskInput"
import SubmitButton from "./SubmitButton/SubmitButton"
import AddButton from "./AddButton/AddButton"
import DropDownInput from "../DropDownInput/DropDownInput"

const TaskStatus = function({name, parentHeight, update}) {

    // Отслеживание высоты div, чтоб поменять стили

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.offsetHeight)
    })

    const nameList = {"Backlog": "", "Ready": "Backlog", "InProgress": "Ready", "Finished": "InProgress"}
    const preName = nameList[name]

    const {data, setData} = useContext(TasksContext)
    const [isClicked, ClickToAdd] = useState(false)
    const [inputValue, setInputValue] = useState("")

    console.log(data)

    function addNewElement() {
        let id = 0
        if (data[name].length > 0) {
            id = data[name][data[name].length - 1].id + 1
        }
        data[name].push({id: id, title: inputValue, description: ""})
        const newData = data
        setData(newData)
        setInputValue("")
        ClickToAdd(!isClicked)
        localStorage.setItem("localdata", JSON.stringify(newData))
        update.changeUpdate(!update.update)
    }

    function moveElement() {
        let id = 0
        if (data[name].length > 0) {
            id = data[name][data[name].length - 1].id + 1
        }
        data[name].push({id: id, title: inputValue.title, description: inputValue.description})
        data[preName] = data[preName].filter((element) => {
            return element.id != inputValue.id
        })
        const newData = data
        setData(newData)
        setInputValue("")
        ClickToAdd(!isClicked)
        localStorage.setItem("localdata", JSON.stringify(newData))
        update.changeUpdate(!update.update)
    }

    return (
        <div className={height > parentHeight * 0.85 ? "task_status task_status_overflow" : "task_status"} ref={ref}>
            <div className="task_name">
                {name === "InProgress" ? "In Progress": name}
            </div>
            <div className="task_main">
                {data[name].map((elem) => {
                        return <TaskElement name={name} element={elem}/>
                    })
                }
                {isClicked ? 
                    (name === "Backlog" ?
                        <TaskInput setInputValue={setInputValue}/>
                        :
                        <DropDownInput inputValue={inputValue} setInputValue={setInputValue} data={data[preName]}/>
                     )
                    : <></>
                }
            </div>
            {isClicked ?
                (inputValue === "" ? <SubmitButton disabled={true} addNewElement={addNewElement}/> : 
                    (name === "Backlog" ? <SubmitButton disabled={false} addNewElement={addNewElement}/> : 
                    <SubmitButton disabled={false} addNewElement={moveElement}/>))
                :
                (data[preName] && data[preName].length > 0 || name === "Backlog" ? <AddButton ClickToAdd={() => {ClickToAdd(!isClicked)}}/> : <></>)
            }
        </div>
    )
}

export default TaskStatus