import React, { useState } from'react';
import '../Style/Userlogin.css';
import loginimage from '../Assets/login.jpg'
import logo1 from '../Assets/Logo1.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 function UserLogin() {
const [mail,newmail]=useState("")
const [pass,newpass]=useState("")

const naviga=useNavigate()




const handleLogin=async()=>{

    const formdata={emailAddress:mail,password:pass}
    console.log(formdata)
    try{
        const response=await axios.post("/login",formdata)
        console.log(response.data.msg)
        if(response.data.msg){
            alert("Login successfull")
            naviga('/profile')
            
        }
        else{
            alert('Login failed')
        }

    }
    catch(error){
console.log(error)
alert('Email or password doesnt match')
    }

}

    return(
        <>
        <img src={loginimage} id='logimg'/>
        <img src={logo1} id='logo1'/>

       
         <div id='formy' >
        <p id='p'>Welcome</p>
        <h1 id='h1'>Login</h1>
        <label for="Email" id='labe1'>Email</label>
    <input type='text' placeholder='Enter your Email address' id='mail' onChange={(e)=>{newmail(e.target.value)}} /><br></br>

    <label for="password" id='labe2'>password</label>
    <input type='password' placeholder='Enter your password' id='pass' onChange={(e)=>{newpass(e.target.value)}} /><br></br>



        
  <button type="button" id="btn" onClick={handleLogin}>Login</button>
  <p id='p1'>
  Don't have an account? <Link to="/">Create account</Link>
 </p>
  </div>

 
 </>

    )
    
}
export default UserLogin;