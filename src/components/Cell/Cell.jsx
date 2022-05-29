import { useEffect, useState } from "react";
import "./Cell.css";

function Cell({item,index,variant}) {

    const [color,setColor] = useState("#000");

    useEffect(()=> {
        setTimeout(()=> {
            setColor("#fff")
        },1000);

    },[])

    const visibility = (color==="#fff" ? "visible" : "hidden" );
    
    return (
        <div style={{ visibility : visibility}} className="cell_container">
      <div style={{backgroundColor:variant}} className="cell__item">
                {item}
            </div>
            <div className="cell__index">
                {index}
            </div>
        </div>
    ) 
}

export default Cell;