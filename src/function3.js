import React  from 'react'
import './func3.css'

export default ()=>{
    const findSecondMax = (data)=>{
        data = data.reduce((acc,val)=>{
            !acc.includes(val) && acc.push(val)
            return acc
        },[]).sort((a,b)=>a-b)
       return data.length === 1 ?  data[0] : data.length === 0 ? "null" : data.slice(-2,-1)
    }
        return (
            <div className="func">
                <h3>Result</h3>
                <div className="result-func3">
                    <div className="row">
                        <label className="send-array">[]</label>
                        <label className="result-array">{findSecondMax([])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1]</label>
                        <label className="result-array">{findSecondMax([1])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,2,3]</label>
                        <label className="result-array">{findSecondMax([1, 2, 3])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,1]</label>
                        <label className="result-array">{findSecondMax([1, 1])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,2,3,4,5,6]</label>
                        <label className="result-array">{findSecondMax([1, 2, 3, 4, 5, 6])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,5,3,2,5,10]</label>
                        <label className="result-array">{findSecondMax([1, 5, 3, 2, 5, 10])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[100,5,3,2,99]</label>
                        <label className="result-array">{findSecondMax([100, 5, 3, 2, 99])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[35,5,3,2,5,100]</label>
                        <label className="result-array">{findSecondMax([35, 5, 3, 2, 5, 100])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,5,101,2,5,10]</label>
                        <label className="result-array">{findSecondMax([1, 5, 101, 2, 5, 10])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[10,10,9]</label>
                        <label className="result-array">{findSecondMax([10, 10, 9])}</label>
                    </div>
                </div>
            </div>
        )
}