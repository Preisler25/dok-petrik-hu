import { NavLink as BaseNavLink } from "react-router-dom/dist"
import styled from "styled-components"

const NavLink = styled(BaseNavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00000090;
    text-decoration: none;



  &.active {
    color: #000;
  }
`;

const Navbar = () => {
    return (
        <ul className="navBarList">
            <li className="navBarItem">
                <NavLink to="/projects" activeClassName="activeNavBarItem">Projektek</NavLink>
            </li>
            <li className="navBarItem">
                <NavLink to="/" activeClassName="activeNavBarItem">Dök</NavLink>
            </li>
            <li className="navBarItem">
                <NavLink to="/needHelp" activeClassName="activeNavBarItem">Segítség</NavLink>
            </li>

        </ul>
    )
}

export default Navbar