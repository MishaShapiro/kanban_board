import "./Footer.css"

const Footer = function () {
    return (
        <footer className="footer">
            <div className="counter">
                <p className="active_task">Active tasks: N</p>
                <p>Finished tasks: M</p>
            </div>
            <div className="author">
                Kanban board by NAME, YEAR
            </div>
        </footer>
    )
}