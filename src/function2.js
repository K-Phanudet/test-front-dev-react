import React, { Component } from 'react'
import './func2.css'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    DateTimefunction(dateTimeString){
        let unixTimeStamp = Date.parse(dateTimeString)/1000
        let year = new Date(dateTimeString).getFullYear()
        let month = ("0"+(new Date(dateTimeString).getMonth()+1)).slice(-2)
        let day = ("0"+(new Date(dateTimeString).getDate())).slice(-2)
        let dayOfDate = new Date(year,month,0).getDate()
        let quarter = Math.ceil(month / 3)
        let thaiDate = new Date(dateTimeString).toLocaleString('th-TH',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        let minute = ("0"+(new Date(dateTimeString).getMinutes())).slice(-2)
        let hour = ("0"+(new Date(dateTimeString).getHours()+1)).slice(-2)
          return (  <div className="result-func2">
                        <label>{day}/{month}/{year}   {hour}:{minute}</label>
                        <div className='sub-label'>
                                <label>{thaiDate} </label><label className="des">รูปแบบปฏิทินไทย</label>
                        </div>
                        <div className='sub-label'>
                                <label>{dayOfDate} </label><label className="des">จำนวนวันในเดือนนี้</label>
                        </div>
                        <div className='sub-label'>
                                <label>{quarter} </label><label className="des">ไตรมาตรของเดือนนี้</label>
                        </div>
                        <div className='sub-label'>
                                <label>{unixTimeStamp} </label><label className="des">unix TimeStamp</label>
                        </div>
                    </div>)
    }
    render() {
        return (
            <div className="func">
                <h3>Result</h3>
                {this.DateTimefunction("2020-08-10T14:54:52+07:00")}
            </div>
        )
    }
}