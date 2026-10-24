import { Link, NavLink } from "react-router-dom"
import CONSTANT from "../common/constant"
import './Navbar.css'
import logoicon from '../assets/loin.jpeg'
import toast from "react-hot-toast"


function Navbar(props: any) {
    const { isLoggedIn, setisLoggedIn } = props
    return <div className="nav-container">
        <Link to={CONSTANT.ROUTES.HOME}><img src={logoicon} className="logo" loading="lazy"></img></Link>
        <nav>
            <ul className="nav-list">
                <li className="nav-item"><NavLink to={CONSTANT.ROUTES.HOME} >Home</NavLink></li>
                <li className="nav-item"><NavLink to={CONSTANT.ROUTES.ABOUT}>About</NavLink></li>
                <li className="nav-item"><NavLink to={CONSTANT.ROUTES.SUPPORT}>Support</NavLink></li>
                <li className="nav-item"><NavLink to={CONSTANT.ROUTES.CONTACT}>Contact</NavLink></li>
            </ul>
        </nav>


        <div>
            {!isLoggedIn && <Link className="nav-btn" to={CONSTANT.ROUTES.LOGIN}><button>Login</button></Link>}
            {!isLoggedIn && <Link className="nav-btn" to={CONSTANT.ROUTES.SINGUP}><button>Signup</button></Link>}
            {isLoggedIn && <Link className="nav-btn" to={CONSTANT.ROUTES.DASHABORD}><button>Dashboard</button></Link>}
            {isLoggedIn && <Link className="nav-btn" to={CONSTANT.ROUTES.LOGOUT}><button onClick={() => {
                setisLoggedIn(false);
                toast.success('User has been logged out successfully')

            }}>Log Out</button></Link>}
        </div>

    </div>
}

export default Navbar