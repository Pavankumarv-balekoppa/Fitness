import { useRef, useState } from "react";
import Navbar from "./navbar";

const Bimcalculater = () => {

    let weight = useRef(0)
    let fitness = useRef(0)
    let loss = useRef(0)
    let [result, setresult] = useState(0)
    let[jai,setjai]=useState(false)

    let submit = (e) => {
        e.preventDefault();
        let one= {w:weight.current.value,
                  f:fitness.current.value,
                  l:loss.current.value}
        setresult(one)
    }
    return (
        <div className="bmi">
            <Navbar />
            <div className='form-cont'>
                <h1>BMI Calculater</h1>
                <form onSubmit={submit}>
                    <input type="number" placeholder='weight' ref={weight} required />
                    <input type="number" placeholder='fitness' ref={fitness} required />
                    <input type="number" placeholder='loss' ref={loss} required />
                    <input type="submit"  value="Calculate"  />
                </form>
            </div>

            <h1>calculate result : {result.w * result.f - result.l }</h1>
        </div>
    );
}

export default Bimcalculater;