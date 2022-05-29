import React, {useState,useEffect} from "react";
import Cell from "../Cell/Cell";

export default function LinearSearch({array,searchItem,isVisualize}) {
    // const [itemx,setItemx] = useState([]);
    // const {danger} = {""} -> red checking blue green
    const [color,setColor]= useState([])

    // const [] {}
    useEffect(()=>{
        
        let data= [];

        setTimeout(()=>{
            for(let i=0;i<array.length;i++){
               data.push({color:'#94a1b2'})
            }
            setColor(data)
        },2000)

        
        setTimeout(()=>{    

            console.log(data);


            for(let i=0;i<array.length;i++){
               setTimeout(()=>{
                   if(array[i]===searchItem){
                       console.log(data[i])
                        data[i] = {color:'green'};
                        // setColor([...color,{color:'green'}])
                        
                        // break;
                   }
                    else{
                        // setColor([...color,{color:'red'}])
                        data[i] = {color:'#d9376e'};
                    }
                    setColor(data)
                    console.log('color', color)
               },500)
            //    console.log(data);
            }

        },3000)
        // console.log('first')

    },[isVisualize])
    return(
        <div style={{display:"flex",flexWrap: "wrap"}} className="container">
            {array.map((item,index) => {
                    return (
                        <React.Fragment>
                         <div>
                            <div style={{fontSize: "1.8rem"}} className="ls__cursor">
                            👇🏻
                            </div>

                            <Cell key={`${item}:${index}`} item={item} index={index} variant={color[index]?.color} />
                        </div>
                        </React.Fragment>
                    )
            })}
        </div>
    ) 
}