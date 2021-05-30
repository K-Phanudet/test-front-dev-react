import React from 'react'
import Skeleton from 'react-loading-skeleton'
const boxCards = (num) => {
    let subItem = []
    const Item = []
    let total = num
    let row = total / 6
    let count = 0
    for (let i = 0; i < row; i++) {
        subItem = []
        for (let j = 0; j < 6; j++) {
            if (count < num) {
                subItem.push(<div className='card' key={`card-pokemon-${count}`}>
                    <Skeleton className="wrap-img card" circle={true} duration={1} height={100} width={100} />
                    <Skeleton variant="text" className='img-label' duration={1} height={20} width={80} />
                     </div>)
            } else {
                break
            }
            count += 1
        }
        Item.push(<div className="wrap-row" key={`card-row-${i}`}>{subItem}</div>)

    }
    return Item
}
const SkeletonCard = () => {
    return (
        <div className="wrap-card">
            {boxCards(104)}
        </div>
    )
}
export default SkeletonCard;