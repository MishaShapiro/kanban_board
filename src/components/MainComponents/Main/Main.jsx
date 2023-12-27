import "./Main.css"
import TaskStatus from "../TaskStatus/TaskStatus.jsx"

const Main = function() {
    return (
        <main className="main">
            <TaskStatus name="Backlog" />
            <TaskStatus name="Ready" />
            <TaskStatus name="In Progress" />
            <TaskStatus name="Finished" />
        </main>
    )
}

export default Main