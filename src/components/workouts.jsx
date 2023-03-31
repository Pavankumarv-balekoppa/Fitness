import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Workout = () => {

    let [workouts , setWorkouts] =  useState(null);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
        .then(data => { console.log(data); setWorkouts(data)})
        .catch(err => console.error(err));
    } , [])


    return (<div >
        <Navbar/>
        <h1>All workouts</h1>
        <Link style={{textDecoration:"none"}} to="/trainerdashboard">Back</Link>
        {workouts && <div className="all-workouts">
            {
                workouts.map((workout)=>{
                    return(
                        <div className="workout">
                            <img src={workout.gifUrl} alt="image not found" />
                            <h4>Workout name : { workout.name } </h4>
                            <p>Body part : {workout.bodyPart}</p>
                            <p>Equipment : {workout.equipment}</p>
                        </div>
                    )
                })
            }
        </div>}
        <Link style={{backgroundColor:"yellow",padding:10,paddingLeft:15,paddingRight:15,borderRadius:10
    ,fontWeight:"bold",fontSize:15,textDecoration:"none",color:"black"}} to="/trainerdashboard">Back</Link>

    </div>   );
}
 
export default Workout;