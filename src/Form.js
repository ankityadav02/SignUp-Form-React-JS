import React, { useState, useEffect } from 'react';
import './Form'; 

function Form() {
    const data = { firstname: "", lastname: "", username: "", email: "", password: "", 
        phoneNumber: "", country: "", city: "", panNo: "", aadhar: ""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        if (flag) {
            console.log("Registered");
        }}, [flag]);

    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.firstname || !inputData.lastname || !inputData.username || 
            !inputData.email || !inputData.password || !inputData.phoneNumber || 
            !inputData.country || !inputData.city || !inputData.panNo || !inputData.aadhar) {
            alert("All fields are required");
        } else {
            setFlag(true);
        }
    }

    if (flag) {
        return (
            <div>
                <h1>Registration Successful</h1>
                <div className='container'>
                    <p>First Name: {inputData.firstname}</p>
                    <p>Last Name: {inputData.lastname}</p>
                    <p>Username:{inputData.username}</p>
                    <p>Email: {inputData.email}</p>
                    <p>Password: {inputData.password}</p>
                    <p>Phone Number: {inputData.phoneNumber}</p>
                    <p>Country: {inputData.country}</p>
                    <p>City: {inputData.city}</p>
                    <p>PAN No: {inputData.panNo}</p>
                    <p>Aadhar No: {inputData.aadhar}</p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className='container'>
                <input type="text" name="firstname" value={inputData.firstname} onChange={handleData} id="firstName" placeholder="First Name" />
                <input type="text" name="lastname" value={inputData.lastname} onChange={handleData} id="lastName" placeholder="Last Name" />
                <input type="text" name="username" value={inputData.username} onChange={handleData} id="userName" placeholder="UserName" />
                <input type="Email" name="email" value={inputData.email} onChange={handleData} id="email" placeholder="Email" />
                <input type="password" name="password" value={inputData.password} onChange={handleData} id="password" placeholder="Password" />
                <input type="number" name="phoneNumber" value={inputData.phoneNumber} onChange={handleData} id="phoneNumber" placeholder="Ph. No." />
                <select id="country" name="country" value={inputData.country} onChange={handleData}>
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <select id="city" name="city" value={inputData.city} onChange={handleData}>
                    <option value="">City</option> 
                    <option value="Jaipur">Jaipur</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <input type="text" name="panNo" value={inputData.panNo} onChange={handleData} placeholder="Pan No." />
                <input type="number" name="aadhar" value={inputData.aadhar} onChange={handleData} placeholder="Aadhar No." />
                <input type='submit' id="btn" value='Submit'/>
            </div>
        </form>
    );
}

export default Form;
