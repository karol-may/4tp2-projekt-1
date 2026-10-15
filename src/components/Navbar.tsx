import { NavLink } from "react-router"

export function Navbar(){
    return(
        <ul className="nav">
            <li className="nav-item">
                <NavLink className={({isActive}) => isActive?"active nav-link":"nav-link" } to="/">Strona główna</NavLink>            </li>
            <li className="nav-item">
                <NavLink className={({isActive}) => isActive?"active nav-link":"nav-link" } to="/users">Użytkownicy</NavLink>
            </li>
        </ul>     
    );
}
