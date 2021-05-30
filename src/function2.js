import React from 'react'
import './func2.css'

export default ()=>{
    const  addZeroLead = (number)=>number<9?`0${number}`:number
    const dateTimeFunction= (dateTimeString)=>{
        let dateTime = new Date(dateTimeString)
        let unixTimeStamp = dateTime/1000
        let year = dateTime.getFullYear()
        let month = addZeroLead(dateTime.getMonth()+1)
        let day = addZeroLead(dateTime.getDate())
        let dayOfDate = addZeroLead(new Date(year,month,0).getDate())
        let quarter = Math.ceil(month / 3)
        let thaiDate = new Date(dateTimeString).toLocaleString('th-TH',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        let minute = addZeroLead(dateTime.getMinutes())
        let hour = addZeroLead(dateTime.getHours())
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
        return (
            <div className="func">
                <h4>Raw data : 2020-08-10T14:54:52+07:00</h4>
                <h3>Result</h3>
                {dateTimeFunction("2020-08-10T14:54:52+07:00")}
            </div>
        )
}