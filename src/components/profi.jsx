import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Profi = () => {
 let user =    useSelector((state)=>{return state.user})
 //useSelectore is used to reduce the use of maptoprops and other methods

 let dispatch = useDispatch();

    return ( 
        <>
        <div>
            <h1>USER PROFILE PAGE</h1>
            <h1>username :{user.username}</h1>
            <h1>email :{user.email}</h1>
            <button onClick={()=>{dispatch({type:"logout",payload:null})}}>logout</button>
            <hr />
            <Link to="/home">go back to dashboard</Link>
        </div>
        </>
     );
}
export default Profi;