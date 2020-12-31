import React, { Component } from 'react'
import './func3.css'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    findSecondMax(numbers) {
        if (numbers.length === 0) {
            return 'null'
        } else {
            if (numbers.length === 1) {
                return numbers[0]
            }
            else {
                let tmp_first_max = null
                let tmp_sec_max = null
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > tmp_first_max) {
                        if (tmp_first_max > tmp_sec_max) {
                            tmp_sec_max = tmp_first_max
                        }
                        tmp_first_max = numbers[i]
                    } else {
                        if (numbers[i] > tmp_sec_max && numbers[i] !== tmp_first_max) {
                            tmp_sec_max = numbers[i]
                        }
                    }
                }
                //console.log(`AA : ${tmp_first_max}   BB:: ${tmp_sec_max}`)
                if (tmp_sec_max == null) {
                    return 'null'
                } else {
                    return tmp_sec_max
                }

            }
        }
    }
    render() {
        return (
            <div className="func">
                <h3>Result</h3>
                <div className="result-func3">
                    <div className="row">
                        <label className="send-array">[]</label>
                        <label className="result-array">{this.findSecondMax([])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1]</label>
                        <label className="result-array">{this.findSecondMax([1])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,2,3]</label>
                        <label className="result-array">{this.findSecondMax([1, 2, 3])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,1]</label>
                        <label className="result-array">{this.findSecondMax([1, 1])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,2,3,4,5,6]</label>
                        <label className="result-array">{this.findSecondMax([1, 2, 3, 4, 5, 6])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,5,3,2,5,10]</label>
                        <label className="result-array">{this.findSecondMax([1, 5, 3, 2, 5, 10])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[100,5,3,2,99]</label>
                        <label className="result-array">{this.findSecondMax([100, 5, 3, 2, 99])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[35,5,3,2,5,100]</label>
                        <label className="result-array">{this.findSecondMax([35, 5, 3, 2, 5, 100])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[1,5,101,2,5,10]</label>
                        <label className="result-array">{this.findSecondMax([1, 5, 101, 2, 5, 10])}</label>
                    </div>
                    <div className="row">
                        <label className="send-array">[10,10,9]</label>
                        <label className="result-array">{this.findSecondMax([10, 10, 9])}</label>
                    </div>
                </div>
            </div>
        )
    }
}