import React, { useState} from 'react'
import './home.css'
export default ()=> {
     const [state,setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword: "",
        gender: "",
        resultClassName: ['result', 'hiden-result'],
        error: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verifyPassword: "",
            gender: ""
        },
        classNameErr: {
            firstName: ['error-form'],
            lastName: ['error-form'],
            email: ['error-form'],
            password: ['error-form'],
            verifyPassword: ['error-form'],
            gender: ['error-form']
        }
    })
    const handleChange = (event)=> {
        const {name,value} = event.target
        setState(prevState=>({ ...prevState,[name]:value }))
    }
    const validEmail = (email) => {
        let validator = require("email-validator");
        if (!email) {
            setState((state) => ({...state,
                error: {
                    ...state.error
                    , email: 'Please fill out this field'
                },
                classNameErr: {
                    ...state.classNameErr
                    , email: ['error-form', 'error-active']
                }
            }))
            return true
        } 
        if (!validator.validate(email)) {
            setState((state) => ({...state,
                error: {
                    ...state.error
                    , email: 'Invalid email format,please fill out this field again'
                },
                classNameErr: {
                    ...state.classNameErr
                    , email: ['error-form', 'error-active']
                }
            }))
            return true
        } 
        setState((state) => ({...state,
            error: {
                ...state.error
                , email: ''
            },
            classNameErr: {
                ...state.classNameErr
                , email: ['error-form']
            }
        }))
        return false
    }
    const validBlankField = (data, nameState)=>{
        if (!data) {
            setState((state) => ({...state,
                error: {
                    ...state.error
                    , [nameState]: 'Please fill out this field'
                },
                classNameErr: {
                    ...state.classNameErr
                    , [nameState]: ['error-form', 'error-active']
                }
            }))
            return true
        } 
        setState((state) => ({...state,
            error: {
                ...state.error
                , [nameState]: ''
            },
            classNameErr: {
                ...state.classNameErr
                , [nameState]: ['error-form']
            }
        }))
        return  false
    }
    const validPassword=(password, verifyPassword) =>{
        if (verifyPassword !== password) {
            setState((state) => ({...state,
                error: {
                    ...state.error
                    , verifyPassword: 'Passwords do not match'
                    , password: 'Passwords do not match'
                },
                classNameErr: {
                    ...state.classNameErr
                    , verifyPassword: ['error-form', 'error-active']
                    , password: ['error-form', 'error-active']
                }
            }))
            return true
        }
        if (!password || !verifyPassword) {
            let errPassword = !password ? 'Please fill out this field' : ''
            let errVerifyPassword = !verifyPassword ? 'Please fill out this field' : ''
            let classPassword = !password ? ['error-form', 'error-active'] : ['error-form']
            let classVerifyPassword = !verifyPassword ? ['error-form', 'error-active'] : ['error-form']
            setState((state) => ({...state,
                error: {
                    ...state.error
                    , password: errPassword
                    , verifyPassword: errVerifyPassword
                },
                classNameErr: {
                    ...state.classNameErr
                    , password: classPassword
                    , verifyPassword: classVerifyPassword
                }
            }))
            return true
        }
        setState((state) => ({...state,
            error: {
                ...state.error
                , password: '',
                verifyPassword: ''
            },
            classNameErr: {
                ...state.classNameErr
                , password: ['error-form']
                , verifyPassword: ['error-form']
            }
        }))
        return false
    }

    const validForm = () => {
        let err = []
        err.push(validEmail(state.email))
        err.push(validBlankField(state.firstName, 'firstName'))
        err.push(validBlankField(state.lastName, 'lastName'))
        err.push(validBlankField(state.gender, 'gender'))
        err.push(validPassword(state.password, state.verifyPassword))
        if (err.every(val=>val===false)) {
            setState(prev=>({...prev,
                resultClassName: ['result']
            }))
        } else {
            setState(prev=>({...prev,
                resultClassName: ['result', 'hiden-result']
            }))
        }
    }
    return (
            <div>
                <form id="form-Valid" >
                    <label className="Title-form">Test form and validation</label>
                    <div className="first-name form-input">
                        <label className="title-input">First Name</label>
                        <div className="sub-input">
                            <input type="text" id="firstName" name="firstName" placeholder="Please fill first name" onChange={handleChange} />
                            <label className={state.classNameErr.firstName.join(' ')}>{state.error.firstName}</label>
                        </div>
                    </div>
                    <div className="Last-name form-input">
                        <label className="title-input">Last Name</label>
                        <div className="sub-input">
                            <input type="text" id="lastName" name="lastName" placeholder="Please fill last name" onChange={handleChange} />
                            <label className={state.classNameErr.lastName.join(' ')}>{state.error.lastName}</label>
                        </div>
                    </div>
                    <div className="E-mail form-input">
                        <label className="title-input">E-mail</label>
                        <div className="sub-input">
                            <input type="text" id="email" name="email" placeholder="Please fill email" onChange={handleChange} />
                            <label className={state.classNameErr.email.join(' ')}>{state.error.email}</label>
                        </div>
                    </div>
                    <div className="Password form-input">
                        <label className="title-input">Password</label>
                        <div className="sub-input">
                            <input type="password" id="password" name="password" placeholder="Please fill password" onChange={handleChange} />
                            <label className={state.classNameErr.password.join(' ')}>{state.error.password}</label>
                        </div>
                    </div>
                    <div className="Verify-Password form-input">
                        <label className="title-input">Verify Password</label>
                        <div className="sub-input">
                            <input type="password" id="verifyPassword" name="verifyPassword" placeholder="Please fill verify password" onChange={handleChange} />
                            <label className={state.classNameErr.verifyPassword.join(' ')}>{state.error.verifyPassword}</label>
                        </div>
                    </div>
                    <div className="gender form-input">
                        <label className="title-input">Gender</label>
                        <div className="sub-input">
                            <select name="gender" id="gender" value="" onChange={handleChange}>
                                <option value="" >Please select a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Rather Not Say">Rather not say</option>
                            </select>
                            <label className={state.classNameErr.gender.join(' ')}>{state.error.gender}</label>
                        </div>
                    </div>
                    <div className="form-input">

                        <div className="button-submit">
                            <button id="submit" type="button" onClick={validForm} >Submit</button>
                        </div>
                    </div>
                    <div id="result" className={state.resultClassName.join(' ')}>
                        <label className="result-title">Result:</label>
                        <label className="result-content">First Name : {state.firstName}</label>
                        <label className="result-content">Last Name : {state.lastName}</label>
                        <label className="result-content">E-mail : {state.email}</label>
                        <label className="result-content">Gender : {state.gender}</label>
                    </div>
                </form>

            </div>
        )
}