import "./SubmitButton.css"

const SubmitButton = function ({disabled, addNewElement}) {

    const classname = disabled ? "submit_button submit_button_disabled" : "submit_button"

    return (<div className="task_add">
        <button disabled={disabled} className={classname} onClick={addNewElement}>
            Submit
        </button>
    </div>)
}

export default SubmitButton