import React, { Component } from 'react'
import './home.css'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            passwd: "",
            verifypasswd: "",
            gender: "",
            resultClassName: ['result', 'hiden-result'],
            error: {
                fname: "",
                lname: "",
                email: "",
                passwd: "",
                verifypasswd: "",
                gender: ""
            },
            classNameErr: {
                fname: ['error-form'],
                lname: ['error-form'],
                email: ['error-form'],
                passwd: ['error-form'],
                verifypasswd: ['error-form'],
                gender: ['error-form']
            }


        }
        this.handleChange = this.handleChange.bind(this);
        this.validForm = this.validForm.bind(this)
    }
    handleChange(event) {
        const name = event.target.name
        this.setState({ [name]: event.target.value })
       
    }
    validEmail(email) {
        let statusErr = false
        let validator = require("email-validator");

        if (email === null || email === '') {
            statusErr = true
            this.setState((state) => ({
                error: {
                    ...state.error
                    , email: 'Please fill out this field'
                },
                classNameErr: {
                    ...state.classNameErr
                    , email: ['error-form', 'error-active']
                }
            }))
        } else {
            if (!validator.validate(email)) {
                statusErr = true
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , email: 'Invalid email format,please fill out this field again'
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , email: ['error-form', 'error-active']
                    }
                }))
            } else {
                statusErr = false
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , email: ''
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , email: ['error-form']
                    }
                }))
            }
        }
        return statusErr
    }
    validBlankfileld(data, nameState) {
        let statusErr = false
        if (data === null || data === '') {
            statusErr = true
            this.setState((state) => ({
                error: {
                    ...state.error
                    , [nameState]: 'Please fill out this field'
                },
                classNameErr: {
                    ...state.classNameErr
                    , [nameState]: ['error-form', 'error-active']
                }
            }))
        } else {
            statusErr = false
            this.setState((state) => ({
                error: {
                    ...state.error
                    , [nameState]: ''
                },
                classNameErr: {
                    ...state.classNameErr
                    , [nameState]: ['error-form']
                }
            }))

        }
        return statusErr
    }
    validPassword(passwd, verifypasswd) {
        let statusErr = false
        if (verifypasswd !== passwd && verifypasswd !== '' && passwd !== ''
            && verifypasswd !== null && passwd !== null) {
            statusErr = true
            this.setState((state) => ({
                error: {
                    ...state.error
                    , verifypasswd: 'Passwords do not match'
                    , passwd: 'Passwords do not match'
                },
                classNameErr: {
                    ...state.classNameErr
                    , verifypasswd: ['error-form', 'error-active']
                    , passwd: ['error-form', 'error-active']
                }
            }))
        } else {
            if (passwd === null || passwd === '') {
                statusErr = true
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , passwd: 'Please fill out this field'
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , passwd: ['error-form', 'error-active']
                    }
                }))
            } else {
                statusErr = false
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , passwd: ''
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , passwd: ['error-form']
                    }
                }))
            }
            if (verifypasswd === null || verifypasswd === '') {
                statusErr = true
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , verifypasswd: 'Please fill out this field'
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , verifypasswd: ['error-form', 'error-active']
                    }
                }))
            } else {
                statusErr = false
                this.setState((state) => ({
                    error: {
                        ...state.error
                        , verifypasswd: ''
                    },
                    classNameErr: {
                        ...state.classNameErr
                        , verifypasswd: ['error-form']
                    }
                }))
            }

        }



        return statusErr
    }

    validForm() {
        let err = []
        err.push(this.validEmail(this.state.email))
        err.push(this.validBlankfileld(this.state.fname, 'fname'))
        err.push(this.validBlankfileld(this.state.fname, 'lname'))
        err.push(this.validBlankfileld(this.state.gender, 'gender'))
        err.push(this.validPassword(this.state.passwd, this.state.verifypasswd))

        if (err.indexOf(true) < 0) {
            this.setState({
                resultClassName: ['result']
            })
        } else {
            this.setState({
                resultClassName: ['result', 'hiden-result']
            })
        }


    }

    render() {
        return (
            <div>
                <form id="form-Valid" >
                    <label className="Title-form">Test form and validation</label>
                    <div className="first-name form-input">
                        <label className="title-input">First Name</label>
                        <div className="sub-input">
                            <input type="text" id="fname" name="fname" placeholder="Please fill first name" onChange={this.handleChange} />
                            <label className={this.state.classNameErr.fname.join(' ')}>{this.state.error.fname}</label>
                        </div>
                    </div>
                    <div className="Last-name form-input">
                        <label className="title-input">Last Name</label>
                        <div className="sub-input">
                            <input type="text" id="lname" name="lname" placeholder="Please fill last name" onChange={this.handleChange} />
                            <label className={this.state.classNameErr.lname.join(' ')}>{this.state.error.lname}</label>
                        </div>
                    </div>
                    <div className="E-mail form-input">
                        <label className="title-input">E-mail</label>
                        <div className="sub-input">
                            <input type="text" id="email" name="email" placeholder="Please fill email" onChange={this.handleChange} />
                            <label className={this.state.classNameErr.email.join(' ')}>{this.state.error.email}</label>
                        </div>
                    </div>
                    <div className="Password form-input">
                        <label className="title-input">Password</label>
                        <div className="sub-input">
                            <input type="password" id="passwd" name="passwd" placeholder="Please fill password" onChange={this.handleChange} />
                            <label className={this.state.classNameErr.passwd.join(' ')}>{this.state.error.passwd}</label>
                        </div>
                    </div>
                    <div className="Verify-Password form-input">
                        <label className="title-input">Verify Password</label>
                        <div className="sub-input">
                            <input type="password" id="verifypasswd" name="verifypasswd" placeholder="Please fill verify password" onChange={this.handleChange} />
                            <label className={this.state.classNameErr.verifypasswd.join(' ')}>{this.state.error.verifypasswd}</label>
                        </div>
                    </div>
                    <div className="gender form-input">
                        <label className="title-input">Gender</label>
                        <div className="sub-input">
                            <select name="gender" id="gender" onChange={this.handleChange}>
                                <option value="" disabled selected>Please select a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Rather Not Say">Rather not say</option>
                            </select>
                            <label className={this.state.classNameErr.gender.join(' ')}>{this.state.error.gender}</label>
                        </div>
                    </div>
                    <div className="form-input">

                        <div className="button-submit">
                            <button id="submit" type="button" onClick={this.validForm} >Submit</button>
                        </div>
                    </div>
                    <div id="result" className={this.state.resultClassName.join(' ')}>
                        <label className="result-title">Result:</label>
                        <label className="result-content">First Name : {this.state.fname}</label>
                        <label className="result-content">Last Name : {this.state.lname}</label>
                        <label className="result-content">E-mail : {this.state.email}</label>
                        <label className="result-content">Gender : {this.state.gender}</label>
                    </div>
                </form>

            </div>
        )
    }
}