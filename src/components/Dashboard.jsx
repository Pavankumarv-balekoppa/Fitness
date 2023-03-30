import Navbar from "./navbar";

const Dashboard = () => {
    return ( 
        <div className="dashbord">
            <Navbar/>

            <section className="s1">
           <div>
                <h1>#1 Fitness App.Work Out Anytime. Anywhere.</h1>
                <p>Unlimited access to the world’s best workouts from celebrity trainers</p>
           </div>
        </section>

        <section className="s2"> 
            <div>
                <h1>Get FitOn. Get Results.</h1>
                <p>Join 13+ million members on the top digital health & wellness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</p>
            </div>

            <div className="cards">
                <div className="card"  data-aos="zoom-in-up">
                    <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png"/>
                    <h3>Best Workouts</h3>
                    <p>Train your mind and body with personalized fitness programs.</p>
                </div>

                <div className="card"  data-aos="zoom-in-up">
                    <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/FitOn-med-002.jpg"/>
                    <h3>Best Meditation</h3>
                    <p>Train your mind and body with personalized fitness programs.</p>
                </div>

                <div className="card"  data-aos="zoom-in-up">
                    <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-1.png"/>
                    <h3>Best Trainers</h3>
                    <p>Train your mind and body with personalized fitness programs.</p>
                </div>

                <div className="card"  data-aos="zoom-in-up">
                    <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-2.png"/>
                    <h3>Always On</h3>
                    <p>Train your mind and body with personalized fitness programs.</p>
                </div>
                
            </div>
        </section>

        
            {/* instal aos (animation when on scroll) install = npm i aoc --save
            then import sum attribute in component
            website : aos animation */}

        </div>
     );
}
 
export default Dashboard;











// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";

// const Dashboard = ( {userdetails , remove_user} ) => {
//     return ( 
//       <>
//         <div>
//             <nav>
//                 <Link to="/profile">Profile</Link>
//                 <button onClick={remove_user}>Logout</button>
//             </nav>

//             <h1> {userdetails.username} </h1>
//             <h1> {userdetails.email} </h1>
//             <h1> {userdetails.password} </h1>            
  
//             <button onClick={remove_user}>Logout</button>
//         </div>
//       </>
//      );
// }
 
// let mapStateToProps = (state)=>{
//     return { 
//         userdetails : state.user
//     };
// }

// let mapDispatchToProps = (dispatch)=>{
//     return {
//         remove_user : ()=>{ dispatch( {type:"logout" , payload : null} )  }
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);