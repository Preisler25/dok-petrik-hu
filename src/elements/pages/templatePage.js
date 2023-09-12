import { Outlet } from "react-router"
import Navbar from "../components/navbar"

const DefPage = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default DefPage