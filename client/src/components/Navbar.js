import {NavLink} from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/teams">View Teams</NavLink>
            <NavLink exact to="/new_teams">New Team</NavLink>
            <NavLink exact to="/athletes">View Athlete</NavLink>
            <NavLink exact to="/new_athletes">New Athlete</NavLink>
            {/* <NavLink exact to="/athletes/train">Train Athletes</NavLink> */}

        </nav>
    )
}

export default Navbar;