import '../Style/profile.css'
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../Assets/Logo1.png'
import avathar from '../Assets/Avatar.png'

const Profile=()=>{
      
const [profile,setprofile]=useState("")


 useEffect(async()=>{
    const response=await axios.get('/profile')
console.log(response)
setprofile(response.data)
 },[])
    

    return(
        <>
        <img src={image} id='image'/>
        <img src={avathar} id='ava'/>


        <div id='title'>{profile.fullName}</div>
        {console.log(profile.fullName)}
        <h3>PROFILE</h3>
        <div id='details'>
            
        <p>Name:{profile.fullName}</p>
        <p>Email:{profile.emailAddress}</p>
        <p>DOB:{profile.dateOfBirth}</p>
        <p>phone number:{profile.phoneNumber}</p>
        <p>Address:{profile.address}</p>
        <p>City{profile.city}</p>
        <p>State:{profile.state}</p>
        <p>Zipcode:{profile.zipCode}</p>
        <p>Country:{profile.country}</p>
        <p>Securty Question:{profile.securityQuestion}</p>
        </div>


        
        
        </>


    )
}

export default Profile