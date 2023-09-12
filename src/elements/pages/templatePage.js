import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

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
                <Footer />
            </footer>
        </div>
    )
}

export default DefPage