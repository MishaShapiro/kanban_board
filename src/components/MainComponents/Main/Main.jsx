import "./Main.css"
import TaskStatus from "../TaskStatus/TaskStatus.jsx"
import { useEffect, useRef, useState } from "react"

const Main = function({update}) {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.offsetHeight)
    })

    const taskStatusList = ["Backlog", "Ready", "InProgress", "Finished"]

    return (
        <main className="main" ref={ref}>
            {taskStatusList.map((elem) => {
                return <TaskStatus name={elem} parentHeight={height} update={update}/>
            })}
        </main>
    )
}

export default Main