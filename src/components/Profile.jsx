import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Profile = ({userdetails}) => {
    return ( 
        <>
        <div>
            <h1>USER PROFILE PAGE</h1>
            <hr />

            <Link to="/home">go back to dashboard</Link>
        </div>
        </>
     );
}

let mapStateToProps = (state)=>{
    return {
        userdetails : state
    }
}
 
export default connect(mapStateToProps)(Profile);