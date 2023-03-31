import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let [menu, setmenu] = useState(false)
    let dispatch=useDispatch()
    let {pathname : path}=useLocation()

    return (
        <nav className="home">
            <Link to="/home">
                <div className="logo">
                    <h1>FitBit $H$</h1>
                </div>
            </Link>
            <div className="content">
                {path=="/trainerdashboard" && <Link to="/workout">Workouts</Link>}

                {path!="/trainerdashboard" &&
                <>
                <Link to="">Trainer</Link>
                <Link to="/workout">Workouts</Link>
                <Link to="">My Workouts</Link>
                <Link to="/bimcalculater">BIM Calculater</Link>
                <Link to="">Profile</Link></> }
            </div>
            <div className="logout">
                <button onClick={() => { dispatch({ type: "logout", payload: null })}}>Logout</button>
            </div>
            <div className="hamberger" onClick={() => { setmenu(!menu) }}>
                {/* <i class="box box-menu"></i> */}
                <i class="fa fa-bars"></i>
            </div>
            {menu && <div className="menu">
                <Link to="">Trainer</Link>
                <Link to="/workout">Workouts</Link>
                <Link to="">My Workouts</Link>
                <Link to="/bimcalculater">BIM Calculater</Link>
                <Link to="">Profile</Link>
                <button onClick={() => { dispatch({ type: "logout", payload: null })}}>Logout</button>
            </div>}
        </nav>
    );
}

export default Navbar;