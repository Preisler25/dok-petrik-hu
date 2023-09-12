import { NavLink } from "react-router-dom/dist"


const Navbar = () => {
    return (
        <ul className="navBarList">
            <li className="navBarItem">
                <NavLink to="/projects" >Projektek</NavLink>
            </li>
            <li className="navBarItem">
                <NavLink to="/" >Dök-röl</NavLink>
            </li>
            <li className="navBarItem">
                <NavLink to="/needHelp">Segítség</NavLink>
            </li>

        </ul>
    )
}

export default Navbar