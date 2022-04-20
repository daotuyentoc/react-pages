import { NavLink } from "react-router-dom"
import SwitchTheme from "../../SwitchTheme"

function Header() {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header-inner">
                    <div className="header">
                        <NavLink to="/react-pages" className="nav-link" >Home</NavLink>
                        <NavLink to="/react-pages/list-movie" className="nav-link">List</NavLink>
                    </div>
                    <SwitchTheme />
                </div>
            </div>

        </div>
    )
}
export default Header