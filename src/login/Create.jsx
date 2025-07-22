import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        showcreate(username, password);
    };

    
async function  showcreate(username,password){
    const data={ user:username, pass:password} 
    console.log(data);
    try {
            
            const response = await fetch('http://localhost:3000/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Account created successfully:', result);
            create(username);
            alert('Account created successfully');
            navigate("/login")
            
        } catch (error) {
            console.error('Error adding item:', error);
            alert('username exists!!');
        }
}

async function create(user){
    try {
            const response = await fetch('http://localhost:3000/collection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("database created",result);
            
        } catch (error) {
            console.error('Error adding item:', error);
            
        }
}
        const gotologin=()=>{
            navigate("/login");
        }

  return (
    <div>
      <div className="login-container">
        <h2>create account</h2>
        <form id="loginForm">
            <input type="text" id="username" name="username" placeholder="Username" required onChange={handleUsernameChange}/>
            <input type="password" id="password" name="password" placeholder="Password" required onChange={handlePasswordChange}/>
            
            <button type="submit" onClick={handleSubmit}>create</button>

            <p className="create">have an account <u className="underline" onClick={gotologin}>Login</u>
                </p>
        
        </form>
    </div>
    </div>
  )
}
