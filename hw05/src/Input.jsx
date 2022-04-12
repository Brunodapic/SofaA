import React from "react";
import { useState } from "react";

export default function Input() {

    // your task here is to create an input form in which a user will input at least 4 fields: x, y, r and color
    // https://www.w3schools.com/react/react_forms.asp
    // be careful, first three are numbers and the third one is either a dropdown or a color picker

    // return 3 elements:
    // 1st: a button which will add another form on click, meaning a user can add more than one circle
    // 2nd: forms with submit buttons
    // 3rd: svg which will consist of circle elements whose data a user has submitted
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [r, setR] = useState(0);
    const [color, setColor] = useState('#000000');
    const [formShow, setFormShow] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(x, y, r, color)
        setFormShow(!formShow)
        addCircle()
        setX(0)
        setY(0)
        setR(0)
        setColor('#000000')
    }

    const addCircle = () => {
        const svg = document.getElementById("svg")
        //nisam bio siguran kako da implementiram neku vrstu memorije,
        //ovo je možda "gluplji" način ,ali je jako jednostavan
        svg.innerHTML += `<circle cx=${x} cy=${y} r=${r} fill=${color} />`
    }
    return (
        <div>
            <button onClick={() => { setFormShow(!formShow) }}>Add another circle</button>
            {formShow ?
                //moguce je isto napraviti pomocu hidden={formShow}, ali htio sam pokazati vise znanja pogotovo sa proslog predavanja
                <form onSubmit={handleSubmit}>
                    <label>Enter X variable:
                        <input value={x} name="x" onChange={(e) => setX(e.target.value)} type="number" />
                    </label>
                    <label>Enter Y variable:
                        <input value={y} name="y" onChange={(e) => setY(e.target.value)} type="number" />
                    </label>
                    <label>Enter radius:
                        <input value={r} name="r" onChange={(e) => setR(e.target.value)} type="number" />
                    </label>
                    <label>Pick a color:
                        <input value={color} name="color" onChange={(e) => setColor(e.target.value)} type="color" />
                    </label>
                    <input type="submit" />
                </form>
                :
                <></>
            }
            <svg id="svg" viewBox="0 0 600 600" style={{ maxWidth: 'min(600px, 80vw)', maxHeight: 'min(600px, 80vh)' }}>
                {/* circle elements with x, y coordinate center, r radius and color color */}
                {/* if you want to be fancy, play with fills, outlines, whatever you find fitting */}
            </svg>
        </div>
    )
}