import React from 'react';
import Card from './card'

const boxCards = (list)=>{
    let subItem=[]
    const Item=[]
    let total =list.length
    let row = total/6
    let count = 0
    for(let i = 0;i<row;i++){
        subItem=[]
        for(let j =0;j<6;j++){
            //console.log(`Count : ${count} && ${j}`)
            if(count<list.length){
                subItem.push(<Card key={count} item={list[count]} />)
            }else{
                break
            }
            count+=1
        }
        Item.push(<div className="wrap-row">{subItem}</div>)
        
    } //console.log(Item)
    return Item
}
const Cardlists = ({list}) =>{
    //console.log(list.length)
    
    return (
        <div className="wrap-card">
           {/* {
           list.map((item,index)=>{
               return <Card key={index} item={item} />
            })
           } */}
           {boxCards(list)}
        </div>
    )
}
export default Cardlists;