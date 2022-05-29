import "./CardContainer.css";
import Algorithm from "../../services/Algorithms";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import { motion } from "framer-motion"

export default function CardContainer() {

    const icons = [
        "🔍",
        "📦"
    ]

    return(
        <motion.div exit={{ opacity: 0 }}>
        <div className="card-container">
            {Algorithm.map((algorithm,index)=>{
                const title = Object.keys(algorithm);
                const LinkTo = `/${title}`
                return <Link key={index} to={LinkTo}><Card key={algorithm} title={title} icon={icons[index]}></Card></Link>
            })}
        </div>
        </motion.div>
    )
}