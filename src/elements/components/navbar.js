import { Link } from "react-router-dom/dist"

const Navbar = () => {
    return (
        <nav>
        <ul>
            <li>
                <Link to="/">Dök</Link>
            </li>
            <li>
                <Link to="/needHelp">Bejelentés</Link>
            </li>

        </ul>
        </nav>
    )
}

export default Navbar