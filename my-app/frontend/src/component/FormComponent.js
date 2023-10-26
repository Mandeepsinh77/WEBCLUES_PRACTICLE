import React from 'react'
import { useState, useEffect } from 'react';
import DisplayData from './DisplayData';

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: null,
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: '',
    });

    const [fetchedData, setFetchedData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'file' ? e.target.files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };
    const sendDataToDatabase = async (e) => {
        const url = "http://localhost:8000/addandfetch/addForm"
        try {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                window.alert("data successfully added")
            }
            else {
                window.alert("response is not ok")
            }
            console.log(response);
        } catch (err) {
            window.alert("error to send data in bakend")
        }
    }

    const fetchData = async (e) => {
        const url = "http://localhost:8000/addandfetch/fetch_data"
        try {
            const response = await fetch(url)
            console.log("fetch")
            const data = await response.json();
            console.log(data)

            setFetchedData(data);

        } catch (err) {
            window.alert(err)
        }
    }

    const validateForm = () => {
        let valid = true;
        const errors = {
            name: '',
            email: '',
            password: '',
            profileImage: '',
        };

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
            valid = false;
        }

        if (formData.profileImage === null) {
            errors.profileImage = 'Profile image is required';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // You can handle the form submission here
            sendDataToDatabase();
            console.log('Form Data:', formData);
        }
        else {
            window.alert("Please Fill up all the feild")
        }
    };

    // useEffect(() => {
    //     // When the component mounts, fetch the data
    //     // fetchData();
    // }, []);
    return (
        <>
            <div className='mainDiv'>

                <div className="form-container">
                    <h2>MY Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                className="inputField"

                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="inputField"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="inputField"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="profileImage">Profile Image</label>
                            <input
                                className="inputField"
                                type="file"
                                id="profileImage"
                                name="profileImage"
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                    <button className='fetch_button' onClick={fetchData}>Fetch Data</button>
                </div>
                <DisplayData fetchedData={fetchedData} />
            </div>
        </>
    );
}

export default FormComponent
