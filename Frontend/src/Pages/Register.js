import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Register.css"
import registerimage from"../Assets/register.jpg"
import logo from'../Assets/Logo1.png'
import axios from 'axios'
import {  Link, useNavigate } from 'react-router-dom';


function Register() {
  const [fullName,setfullname]= useState('')
  const [email, setemail] = useState('')
  const [dob,setdbob]=useState('')
  const [password,setpassword]=useState('')
  const[confrimpass,setconfrimpass]=useState('')
  const[phone,setphone]=useState('')
  const[address,setadress]=useState('')
  const[secques,setsec]=useState('')
  const [city,setcity]=useState('')
  const[state,setstate]=useState('')
  const[country,setcountry]=useState('')
  const[zipcode,setzip]=useState('')

  const navigate=useNavigate()

    



  const handleSubmit = async() => {


    const formdata={fullName:fullName,emailAddress:email,dateOfBirth:dob,password:password,confirmPassword:confrimpass,phoneNumber:phone,securityQuestion:secques,address:address,city:city,state:state,country:country,zipCode:zipcode}
    console.log(formdata)
    try{
        const response=await axios.post("/register",formdata)
        console.log(response.data.msg)
        if(response.data.msg){
            alert("Registration successfully completed now Login to see profile")
            navigate('/login')

        }

    }
    catch(error){
console.log(error)
alert('please fillout all the fields and check passwords are same')
    }
  };

  return (
    
    <>

    <img src={registerimage} id='regimg'/>
    <img src={logo} id='log'/>

    <div id='forms'>
        <p>Welcome</p>
        <h3>Sign up</h3>
    <div id='form1'>
    <label for="Fullname" id='label1'>Fullname</label>
    
    <input type='text' placeholder='Enter your fullname' id='name'onChange={(e)=>{setfullname(e.target.value)}} name='fullName' value={fullName}/>

    <label for="Email" id='label2'>Email</label>
    <input type='text' placeholder='Enter your Email address' id='email' onChange={(e)=>{setemail(e.target.value)}} name='emailAddress' value={email}/><br></br>
    </div>

    <div id='form2'>

    <label for="DOB" id='label3'>Date of birth</label>
    <input type='date' id='date' onChange={(e)=>{setdbob(e.target.value)}} name='dateOfBirth' value={dob}/>
    <label for="password" id='label4'>password</label>
    <input type='password' placeholder='Enter your password' id='password' onChange={(e)=>{setpassword(e.target.value)}} name='password' value={password}/><br></br>
    </div>

    <div id='form3'>
    <label for="phone" id='label5'>Phone Number</label>
    <input type='tel' id='phone' onChange={(e)=>setphone(e.target.value)} name='phoneNumber' value={phone}/>
    <label for="confirm pasword" id='label6'>confirm password</label>
    <input type='password' id='confirmpass' onChange={(e)=>setconfrimpass(e.target.value)} name='confirmPassword' value={confrimpass}/><br></br>
    </div>

    <div id='form4'>

    <label for="security question" id='label7'>securityQuestion</label>
    <input type='text' id='sec' onChange={(e)=>setsec(e.target.value)} name='securityQuestion' value={secques}/><br></br>
    </div>
    <div id='form5'>

<label for="Address" id='label8'>Address</label>
<input type='text' id='add'onChange={(e)=>setadress(e.target.value)} name='address' value={address}/><br></br>
</div>

    <div id='form6'>
    <label for="city">City:</label>
    <select id="city" name="city" value={city} onChange={(e)=>setcity(e.target.value)} >
        <option value="">city</option>
        <option value="newyork">Chennai</option>
        <option value="losangeles">Banglore</option>
        <option value="chicago">Coimbatore</option>
        <option value="houston">Madurai</option>
        <option value="miami">salem</option>
        
    </select>
    <label for="state">state</label>
    <select id="state" name="state" value={state} onChange={(e)=>setstate(e.target.value)}>
        <option value="">state</option>
        <option value="newyork">Tamilnadu</option>
        <option value="losangeles">Karnataka</option>
        <option value="chicago">Kerala</option>
        <option value="houston">Andhra</option>
        <option value="miami">Delhi</option>
    </select>
    <label for="zipcode">zipcode</label>
    <select id="zipcode" name="zipCode" value={zipcode} onChange={(e)=>setzip(e.target.value)}>
        <option value="">00000</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <label for="country">country</label>
    <select id="country" name="country" value={country} onChange={(e)=>setcountry(e.target.value)}>
        <option value="">country</option>
        <option value="newyork">India</option>
        <option value="losangeles">Unitedstates</option>
        <option value="chicago">Australia</option>
        <option value="houston">Unitedkingdom</option>
        <option value="miami">France</option>
    </select>
    </div>
    <br/>
    <button id='bt' onClick={handleSubmit}>Signup</button>
    <p id='al'>
        Already have an accoun? <Link to="/login">Login</Link>
    </p>
    </div>
 </>
    

  );
}
export default Register;
