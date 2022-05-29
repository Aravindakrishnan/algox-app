import { useState } from "react";
import {useLocation, useParams} from "react-router-dom";
import BinarySearch from "../BinarySearch/BinarySearch";
import LinearSearch from "../LinearSearch/LinearSearch";

import "./VisualizeComponent.css";

export default function VisualizeComponent() {
    const path = useParams();
    const location = useLocation();
    const [active,setActive] = useState(false);
    const [array,setArray] = useState("");
    const [userArray,setUserArray] = useState("")
    const [searchItem,setSearchItem] = useState("");
    const [algorithmName,setAlgorithmName] = useState(path.innerType.toLowerCase())
    // const algorithms = ["linearsearch","bubblesort"]
    // const [isStarted,setIsStarted] = useState(false);
    const onSubmit = () => {
        try 
        {
            if(!array && !searchItem) 
            {
                setActive(false)
                throw new Error("Kindly Correct Input...")
            } 
            setArray(userArray.split(","))
            setActive(true);
        }
        catch(error) 
        {
            console.log(error);
        }
    }   

    return(
        <div className="visualize-container">
            <button className="btn success">Start</button>
            <div className="visz__box">

                {
                    (active && algorithmName == "linearsearch" ? 
                        
                         <LinearSearch isStarted={false} array={array} searchItem={searchItem} isVisualize={false} ></LinearSearch> : "") 
                }

                {
                    (active && algorithmName == "binarysearch" ? <BinarySearch array={array} searchItem={searchItem}></BinarySearch> :  "")
                }

            </div>

            <div className="visz__container">
                {/* <div className="visz__code">
                    <code>
                        { !active ? <h3>Code 📜</h3> : 

                            <code className="code">
                                {
                                   <div>
                                        <span className="keyword">function</span> linearSearch(array={JSON.stringify(array)},searchItem={searchItem})
                                        {' {'}
                                        <br/>

                                        <span className="keyword">{`for`}</span> {`(`} <span className="keyword">let </span> {`i = 0; i < array.length i++ ) { `} <br/>
                                        <span className="keyword">{`if`}</span> {`( array[i] === searchItem ) { `} <br/>
                                                <span className="keyword">return </span> i <br/> {'}'} <br/>

                                        <span className="keyword">return </span> -1 <br/>

                                        {'}'}
                                   </div>
                                }           
                            </code>
                        
                        }
                    </code>
                </div> */}

                <div className="visz__logs">
                    <div className="visz__input"> 
                        <textarea resize="false" placeholder="Type/Paste Array Eg: 123,21,32,12,11...." className="visz__array" type="text" onChange={(e)=> { setUserArray(e?e.target.value:"") }} required></textarea>
                        <input placeholder="Type Search Item..." className="visz__item" type="text" onChange={(e)=> { setSearchItem(e?e.target.value:"") }} required></input>
                    </div>
                    <div>
                    <button onClick={onSubmit} className="visz__debug">
                        Visualize
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}