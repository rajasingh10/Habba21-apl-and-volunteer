import React from 'react'
import '../index.css'
import { useHistory } from "react-router"
const Home = () => {
    let history = useHistory()
const  onVolunteer = () =>{
    history.push('/Volunteer-Registration')
}


 const  onAPL = () =>{
    history.push('/APL-Registration')
     }



    return (<div style={{width:'100vw' , height:'100vh'}} >

        <div  className='container d-flex justify-content-center '>
            <div className=''>
        <button     style={{
                    color: "#0DABF1",
                    background: "white",
                  borderRadius: "20px",
                  fontWeight: 500,
             margin:'20px 20px',
                  padding: "3px 22px",
                  border: "none",
                }} onClick={onAPL}>
            APL Registration
        </button>
        <br/>
        <button 
            style={{
                color: "#0DABF1",
                background: "white",
                borderRadius: "20px",
                fontWeight: 500,
                padding: "3px 22px",
                border: "none",
              }}
              onClick={onVolunteer}>
            VolunteerRegistration
        </button>
        </div>
        </div>
        </div>
    )
}

export default Home
