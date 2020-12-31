import React, { Component } from 'react'
import Examdata from './exam-data.json'
import './func1.css'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    dataFunction1(dataFile) {
        let datas = dataFile.filter((dataJson) => {
            return dataJson.is_editable_price === false
        })
        datas.map((data) => {
            let products = data.products
            let sum = 0
            for (let count = 0; count < products.length; count++) {
                sum += products[count].weight
            }
            return data.totalSubProductWeight = sum
        })
        let results = []
        for (let i = 0; i < datas.length; i++) {
            results.push({ name: datas[i].name, totalSubProductWeight: datas[i].totalSubProductWeight })
        }
        //console.log(results)
        return (results.map((result) => (
            <div className="sub-result">
                <label className="result-name">Name : {result.name}</label>
                <label className="result-total"> TotalSubProductWeight : {result.totalSubProductWeight}</label>
            </div>
        )))
    }

    render() {
        return (

            <div className="func">
                <h3>Result</h3>
                {this.dataFunction1(Examdata)}
            </div>
        )
    }
}