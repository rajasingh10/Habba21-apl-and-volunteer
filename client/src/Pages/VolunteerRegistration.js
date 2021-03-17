import React, { useState } from "react";
import axios from 'axios'








export const VolunteerRegistration = () => {
  const [state, setState] = useState({
   
  });





  const register = async (states) =>{
    try {
      const data = await axios.post('/api/add-volunteer' , states)
      console.log(data.data)
      let message  =  data.data.message
    
      if (message === 'Resgistration Successful'){
        console.log('Successfully Registered')
      }
    
    
    } catch (error) {
      console.log(error)
      
    }
      }












  const check_exists = async (states) =>{
try {
  const data = await axios.post('/api/check-reg' , states)
  console.log(data.data)
  let message  =  data.data.message

  if (message === 'New Registration'){
      register(state)
  }


} catch (error) {
  console.log(error)
  
}
  }



//   const handleChange = ({ target: { value, name } }) =>
//     setState(...state, { [name]: value });
  return (
    <div>
      <form onSubmit={e=>{
e.preventDefault();
console.log('local',state);
check_exists(state)
 }
        }  >
        <br />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={e=>{setState({...state,email:e.target.value})}}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={e=>{setState({...state,name:e.target.value})}}
        />
        <br />
        <input
          type="text"
          placeholder="AUID"
          name="auid"
          onChange={e=>{setState({...state,auid:e.target.value})}}
        />
        <br />
        <input
          type="text"
          placeholder="College"
          name="college"
          onChange={e=>{setState({...state,college:e.target.value})}}
        />
        <br />
        <input
          type="text"
          placeholder="Department"
          name="department"
          onChange={e=>{setState({...state,department:e.target.value})}}
        />
        <br />
        <input
          type="number"
          placeholder="Year Of Study"
          name="year"
          onChange={e=>{setState({...state,year:e.target.value})}}
        />
        <br />
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          onChange={e=>{setState({...state,dob:e.target.value})}}
        />
        <br />
        <input
          type="tel"
          placeholder="WhatsApp Number  "
          name="whatsapp"
          onChange={e=>{setState({...state,whatsapp:e.target.value})}}
        />
        <br />
        <input
          type="tel"
          placeholder="Calling number  "
          name="calling"
          onChange={e=>{setState({...state,calling:e.target.value})}}
        />
        {/*  */}
        <br />
        <input
          type="text"
          placeholder="Past Experience in habba"
          name="experience"
          onChange={e=>{setState({...state,experience:e.target.value})}}
        />
        <br />
        <input
          type="text"
          placeholder="Why Do you Want to join Habba "
          name="reason"
          onChange={e=>{setState({...state,reason:e.target.value})}}
        />
        <div onChange={(e) => {setState({...state,gender: e.target.value})}}>
          <input type="radio" value="M" name="gender" /> Male
          <input type="radio" value="F" name="gender" /> Female
        </div>
        <input type='submit'/>
      </form>{" "}
    </div>
  );
};
