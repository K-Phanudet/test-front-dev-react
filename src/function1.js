import React from 'react'
import Examdata from './exam-data.json'
import './func1.css'

export default ()=> {
    const dataFunction1 = (dataFile)=> {
        let results = dataFile.filter(val=>val.is_editable_price===false).reduce((acc,val)=>{
            let weight = val.products.reduce((store,info)=>{
                return store+=info.weight
            },0)
            acc.push({name:val.name,totalSubProductWeight:weight})
            return acc
        },[])
        return (results.map((result) => (
            <div className="sub-result" key={`sub-result-${result.name}`}>
                <label className="result-name">Name : {result.name}</label>
                <label className="result-total"> TotalSubProductWeight : {result.totalSubProductWeight}</label>
            </div>
        )))
    }
        return (
            <div className="func" key="result-function">
                <h3>Result</h3>
                {dataFunction1(Examdata)}
            </div>
        )
}