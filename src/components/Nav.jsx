import {Link} from "react-router-dom"

function Nav () {
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/users/mrbeast">
        <button id="routeBt">Mr beast</button>
        </Link>
        <Link to="/users/kyliejenner">Kylie jenner</Link>
        <Link to="/users/imancodes">Iman musa</Link>

      </nav>
    )
}

export default Nav