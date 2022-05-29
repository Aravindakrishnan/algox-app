import "./Container.css";
import Card from "../Card/Card";
import { useParams, useRouteMatch } from "react-router-dom";
import Algorithm from "../../services/Algorithms";
import {Link} from "react-router-dom";
import { motion } from "framer-motion"

export default function Container() {
 
    let path = useParams();

    const algorithm = Algorithm.filter(algorithm=>{
        return Object.keys(algorithm)[0] === path.type;
    })[0];

    return(
        <motion.div exit={{ opacity: 0 }}>
            <div className="card-container">
                {algorithm[path.type].map(algo=>{
                    const linkTo = `/${path.type}/${algo.name.split(' ').join("").toLowerCase()}`
                    return <Link key={algo.id} to={linkTo} ><Card title={algo.name} icon={algo.icon}></Card></Link>
                })}
            </div>
        </motion.div>
    )
}