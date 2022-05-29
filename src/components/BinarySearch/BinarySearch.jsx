import Cell from "../Cell/Cell"

export default function BinarySearch({array,searchItem}) {
    return(
        <div style={{display:"flex",flexWrap: "wrap"}} className="container">
            {array.map((item,index) => {
                    return (
                        <div>
                            <div style={{fontSize: "1.8rem"}} className="ls__cursor">
                            👇🏻
                            </div>
                        <Cell item={item} index={index} />
                        </div>
                    )
            })}
        </div>
    )
}