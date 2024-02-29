import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Login() {
    const [data, setData] = useState({ userName: '', password: ''});

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = async() => {
        let res = await axios.post('api/auth/login',data);
        console.log(res.data);
        setData({userName:'',password:''});
    };

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: '1rem'
            }}>
                <input type="text" name="userName" onChange={handleInputChange} placeholder='User name' value={data.userName} />
                <input type="password" name="password" onChange={handleInputChange} placeholder='Password' value={data.password} />
                <button onClick={handleClick}>login</button>
                <Link to={'/signup'}>create new account???</Link>
                <Link to={'/profile'}>Profile</Link>
            </div>
        </>
    );
}
