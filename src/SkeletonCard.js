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
            console.log(`Count : ${count} && ${j}`)
            if (count < num) {
                subItem.push(<div className='card'>
                    <Skeleton className="wrap-img" circle={true} className='card' duration={1} height={100} width={100} />
                    <Skeleton variant="text" className='img-label' duration={1} height={20} width={80} />
                     </div>)


                //subItem.push(<Skeleton variant="rect" className='card' duration={1} height={140} width={120} />)
            } else {
                break
            }
            count += 1
        }
        Item.push(<div className="wrap-row">{subItem}</div>)

    } console.log(Item)
    return Item
}
const SkeletonCard = () => {
    return (
        <div className="wrap-card">
            {/* <Skeleton duration={1} height={300} width={300}/> */}
            {boxCards(104)}
        </div>
    )
}
export default SkeletonCard;