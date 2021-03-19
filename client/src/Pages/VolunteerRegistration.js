import React, { useState } from "react";
import axios from 'axios'
import {ToastsContainer, ToastsStore} from 'react-toasts';





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
        ToastsStore.success("SuccessFully Registered")
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


  if (message.split(" ")[0] === "Already") {
    ToastsStore.info("AUID or Email already Registered, Contact CPRD for further changes. ")
  }
  

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
      
        <div class="row register-form">
            <div class="col-md-6">


            <div class="form-group">
        <input
        className='form-control'
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={e=>{setState({...state,email:e.target.value})}}
        />
      </div>
        <div class="form-group">
        <input
        className='form-control'
          type="text"
          placeholder="Name"
          name="name"
          onChange={e=>{setState({...state,name:e.target.value})}}
        /></div>
      
        <div class="form-group">
        <input
        className='form-control'
          type="text"
          placeholder="AUID"
          name="auid"
          onChange={e=>{setState({...state,auid:e.target.value})}}
        /></div>
      
        <div class="form-group">
        <input
        className='form-control'
          type="text"
          placeholder="College"
          name="college"
          onChange={e=>{setState({...state,college:e.target.value})}}
        /></div>
       <div class="form-group">
        <input
        className='form-control'
          type="text"
          placeholder="Department"
          name="department"
          onChange={e=>{setState({...state,department:e.target.value})}}
        /></div>
      
        <div class="form-group">
        <input
        className='form-control'
          type="number"
          placeholder="Year Of Study"
          name="year"
          onChange={e=>{setState({...state,year:e.target.value})}}
        /></div>
        </div>

     
            <div class="col-md-6">
            <div class="form-group">
        <input
           onFocus={
            (e)=> {
              e.currentTarget.type = "date";
              e.currentTarget.focus();
             }
           }

           onBlur={
            (e)=> {
              e.currentTarget.type = "text";
              e.currentTarget.blur();
             }
           }


        className='form-control'
          type="text"
          placeholder="Date of Birth"
          name="dob"
          onChange={e=>{setState({...state,dob:e.target.value})}}
        /></div>
       <div class="form-group">
        <input
        className='form-control'
        type="number"
          placeholder="WhatsApp Number  "
          name="whatsapp"
          onChange={e=>{setState({...state,whatsapp:e.target.value})}}
        /></div>
       <div class="form-group">
        <input
        className='form-control'
          type="number"
          placeholder="Calling number  "
          name="calling"
          onChange={e=>{setState({...state,calling:e.target.value})}}
        /></div>
        {/*  */}
      
        <div class="form-group">
        <input
        className='form-control'
          type="text"
          placeholder="Past Experience in habba"
          name="experience"
          onChange={e=>{setState({...state,experience:e.target.value})}}
        /></div>
      
        <div class="form-group">
        <textarea
        rows="6"
        className='form-control'
          type="text"
          placeholder="Why Do you Want to join Habba "
          name="reason"
          onChange={e=>{setState({...state,reason:e.target.value})}}
        /></div>
        <div onChange={(e) => {setState({...state,gender: e.target.value})}}>
          <input type="radio" value="M" name="gender" /> Male &nbsp;
          <input type="radio" value="F" name="gender" /> Female
        </div>
      
     
</div>
<div style={{ margin: "15px auto 0 auto" }}>
<button
                type="submit"
                style={{
                  background: "#0DABF1",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: 500,
                  padding: "3px 22px",
                  border: "none",
                }}>Register</button>

        </div></div>
      </form>{" "}
      <ToastsContainer store={ToastsStore} position="top_center" />

    </div>
  );
};
