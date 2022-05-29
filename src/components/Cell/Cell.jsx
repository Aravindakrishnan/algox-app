import { useEffect, useState } from "react";
import "./Cell.css";

function Cell({item,index,variant}) {

    const [color,setColor] = useState([]);

    useEffect(()=> {

        setTimeout(()=> {
            setColor([...color,{ color : variant }])
        },1000 * index);
        console.log(color)

    },[])



    const visibility = (color==="#fff" ? "visible" : "hidden" );
    
    return (
        <div style={{ visibility : visibility}} className="cell_container">
      <div style={{backgroundColor:color[index]?.color}} className="cell__item">
                {item}
            </div>
            <div className="cell__index">
                {index}
            </div>
        </div>
    ) 
}

export default Cell;