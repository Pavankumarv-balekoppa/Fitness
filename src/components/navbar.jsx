import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let [menu, setmenu] = useState(false)
    return (
        <nav className="home">
            <div className="logo">
                <h1>FitBit $H$</h1>
            </div>
            <div className="content">
                <Link to="">Trainer</Link>
                <Link to="">Workouts</Link>
                <Link to="">My Workouts</Link>
                <Link to="">BIM Calculater</Link>
                <Link to="">Profile</Link>
            </div>
            <div className="logout">
                <button>Logout</button>
            </div>
            <div className="hamberger" onClick={() => { setmenu(!menu) }}>
                {/* <i class="box box-menu"></i> */}
                <i class="fa fa-bars"></i>
            </div>
            {menu && <div className="menu">
                <Link to="">Trainer</Link>
                <Link to="">Workouts</Link>
                <Link to="">My Workouts</Link>
                <Link to="">BIM Calculater</Link>
                <Link to="">Profile</Link>
                <button>Logout</button>
            </div>}
        </nav>
    );
}

export default Navbar;