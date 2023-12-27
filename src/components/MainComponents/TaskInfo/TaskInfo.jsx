import "./TaskInfo.css"
import cross from "../../../svg/cross.svg"

const TaskInfo = function () {
    return (
        <div className="task_info">
            <div className="task_name">
                Main page – performance issues
            </div>
            <div className="task_description">
                Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.
            </div>
            <button className="cross_btn">
                <img className="cross" src={cross} alt="cross.svg" />
            </button>
        </div>
    )
}