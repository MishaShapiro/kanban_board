import "./AddButton.css"

const AddButton = function ({ClickToAdd}) {
    return (
        <div className="task_add">
            <button className="button" onClick={ClickToAdd}>
                Add card
            </button>
        </div>
    )
}

export default AddButton