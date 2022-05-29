import "./Card.css";

export default function Card({title,icon}) {

    return(
        <div className="card">
            <div className="card__icon">
                {icon}
            </div>
            <div className="card__header">
                <h3 className="card__title">{title}</h3>
            </div>

            <div className="card__gradient">

            </div>
        </div>
    )
}