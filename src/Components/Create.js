import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Create() {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [hobby, setHobby] = useState('')
    


    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('https://66ba5049fa763ff550fb7e2f.mockapi.io/crud',{
            e_fName: fName,
            e_lName: lName,
            e_age: age, 
            e_email: email,
            e_phone: phone,
            e_location: location,
            e_hobby: hobby

        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <>
            <div className="row container justify-content-center ">
                <div className="col-md-5">
                <div className='m-3'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Read Data</button>
                    </Link>
                </div>
                    <div className="bg-primary rounded p-2 text-center">
                        <h1>Create Data</h1>
                    </div>
                    <form  className='row justify-content-center mb-4' action="" onSubmit={handleSubmit}>
                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter First Name: </label>
                            <input type="text" placeholder='First Name' className='form-control' value={fName} onChange={(e) => setFName(e.target.value)} />
                        </div>

                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Last Name: </label>
                            <input type="text" placeholder='Last Name' className='form-control' value={lName} onChange={(e) => setLName(e.target.value)} />
                        </div>

                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Age: </label>
                            <input type="number" placeholder='Age' className='form-control' value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Email: </label>
                            <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        
                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Phone: </label>
                            <input type="phone" placeholder='Phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Location: </label>
                            <input type="text" placeholder='Location' className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>

                        <div className="form-group mb-3 col-10">
                            <label htmlFor="">Enter Hobby: </label>
                            <input type="text" placeholder='Hobby' className='form-control' value={hobby} onChange={(e) => setHobby(e.target.value)} />
                        </div>

                        <br />
                        <div className="d-grid mt-3 col-3">
                            <input type="submit" value="Submit" className='btn btn-success' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create