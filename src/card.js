import React from 'react'

const Card = (item) =>{
    item =item.item
    //console.log(item)
    return (
        <div className='card'>
                <div className="wrap-img">
                    <img src={item.picture} alt={item.name} className="img-pokemon"/>
                </div>
                <label className="img-label">
                {item.name}
                </label>
        </div>
    )
}

export default Card;