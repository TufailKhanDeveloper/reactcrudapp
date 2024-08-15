import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Read() {
    const [apiData, setApiData] = useState([]);
    const [alert, setAlert] = useState(false);
    const apiUrl = process.env.REACT_APP_CRUD;

    const getData = () => {

        // console.log("API URL:", apiUrl); // Debugging line

        if (!apiUrl) {
            console.error("API URL is not defined in the environment variables");
            return;
        }

        axios.get(apiUrl)
            .then((res) => {
                setApiData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }

    useEffect(() => {
        getData();
    }, []);


    const handleDelete = (id) => {
        const apiUrl1 = `${apiUrl}/${id}`;
        // console.log("Deleting from URL:", apiUrl1);

        axios.delete(apiUrl1)
            .then(() => {
                getData();
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
    };

    const setDataTOStorage = (id, fName, lName, age, email, phone, location, hobby) => {
        localStorage.setItem('id', id);
        localStorage.setItem('fName', fName);
        localStorage.setItem('lName', lName);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('location', location);
        localStorage.setItem('hobby', hobby);
    };

    return (
        <div className='container my-4'>
            {alert && (
                <Alert variant="warning" onClose={() => setAlert(false)} dismissible>
                    <p>Deleted</p>
                </Alert>
            )}
            <h1 className='text-center mb-4'>CRUD Application</h1>
            <div className='mb-4'>
                <Link to='/create'>
                    <button className='btn btn-primary'>Create New Data</button>
                </Link>
            </div>
            <div className='table-responsive'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Hobby</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.e_fName}</td>
                                <td>{item.e_lName}</td>
                                <td>{item.e_age}</td>
                                <td>{item.e_email}</td>
                                <td>{item.e_phone}</td>
                                <td>{item.e_location}</td>
                                <td>{item.e_hobby}</td>
                                <td className='text-center'>
                                    <Link to='/edit'>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => setDataTOStorage(item.id, item.e_fName, item.e_lName, item.e_age, item.e_email, item.e_phone, item.e_location, item.e_hobby)}
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className='btn btn-danger ms-2'
                                        onClick={() => {
                                            if (window.confirm('Are You Sure To Delete Data ??')) {
                                                handleDelete(item.id);
                                            }
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Read;
