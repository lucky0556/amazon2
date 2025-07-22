import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';

export default function Login() {
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
            showorder(username, password);
        };

    async function showorder(user,password) {
    try {
        const response = await fetch('http://localhost:3000/accounts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const items = await response.json();
       
        let status=false;
        items.map((item)=>{
            if(item.user === user && item.password === password){
                status=true;
            }
            
        })
         console.log(status)
        if(status){
            alert("login successfull");
            localStorage.setItem("username", username);
                navigate("/", { state: { username: username } });
               
        }
        else{
            alert("incorrect username and password");
               
        }
        
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}
  const gotocreate=()=>{
    navigate("/create");
  }

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="username" name="username" placeholder="Username" required onChange={handleUsernameChange}/>
            <input type="password" id="password" name="password" placeholder="Password" required onChange={handlePasswordChange}/>
            <button type="submit" onClick={handleSubmit}>Login</button><br/>
            <p className="create">Don't have an account 
                <u className="underline" onClick={gotocreate}>create account</u>
                </p>
        </form>
    </div>
    </div>
    
  )
}
