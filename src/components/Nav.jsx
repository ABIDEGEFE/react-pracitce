import {Link} from "react-router-dom"

function Nav () {
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">
        <button id="routeBt">Contact</button>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/abcd">Postpage</Link>

      </nav>
    )
}

export default Nav