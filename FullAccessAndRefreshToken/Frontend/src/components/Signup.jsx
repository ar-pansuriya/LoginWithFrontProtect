import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
    const [data, setData] = useState({ fullName: '', userName: '', password: '', gender: '' });
const navigate = useNavigate();
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = async() => {
        let res = await axios.post('api/auth/signup',data);
        console.log(res.data);
        setData({fullName:'',userName:'',password:'',gender:''});
        navigate('/login');
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
                <input type="text" name="fullName" onChange={handleInputChange} placeholder='Full name' value={data.fullName} />
                <input type="text" name="userName" onChange={handleInputChange} placeholder='User name' value={data.userName} />
                <input type="password" name="password" onChange={handleInputChange} placeholder='Password' value={data.password} />
                <div>
                    <input type="radio" name="gender" value={'male'} id="male" onChange={handleInputChange} checked={data.gender === 'male'} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value={'female'} id="female" onChange={handleInputChange} checked={data.gender === 'female'} />
                    <label htmlFor="female">Female</label>
                </div>
                <button onClick={handleClick}>Signup</button>
                <Link to={'/login'}>already have an account???</Link>
            </div>
        </>
    );
}
