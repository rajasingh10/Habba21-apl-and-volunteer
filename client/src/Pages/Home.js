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



    return (
        <div>
        <h1 onClick={onAPL}>
            APl Registration
        </h1>
        <h1 onClick={onVolunteer}>
            VolunteerRegistration
        </h1>
        </div>
    )
}

export default Home
