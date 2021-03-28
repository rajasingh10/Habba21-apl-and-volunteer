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
{/* <h1 style={{textAlign:'center'}}>Habba 2021</h1> */}
<div class="container">
    <div class="row align-items-center">
        <div className='d-flex flex-wrap justify-content-center align-middle'>
 <div  className=' button-container'>

     {/* button 1 */}
    <div class="glass-btn blue-btn" onClick={onVolunteer}>
    <img src="/vol.svg" className='image' alt="facebook" />
    </div>


</div>
<div  className=' button-container'>
{/* button 2 */}
<div class="glass-btn blue-btn" onClick={onAPL}>
    {/* <img src="https://i.postimg.cc/DwbWDQTx/facebook.png" alt="facebook" style={{width:" 5.5em"}}/> */}
    <img src="/apl.svg" className='image2' alt="facebook" />

    </div>


</div></div>

    </div>
        </div>
        </div>
    )
}

export default Home




















// <div  className='container d-flex justify-content-center '>
// <div className=''>
// <button     style={{
//         color: "#0DABF1",
//         background: "white",
//       borderRadius: "20px",
//       fontWeight: 500,
//  margin:'20px 20px',
//       padding: "3px 22px",
//       border: "none",
//     }} onClick={onAPL}>
// APL Registration
// </button>
// <br/>
// <button 
// style={{
//     color: "#0DABF1",
//     background: "white",
//     borderRadius: "20px",
//     fontWeight: 500,
//     padding: "3px 22px",
//     border: "none",
//   }}
//   onClick={onVolunteer}>
// VolunteerRegistration
// </button>
// </div>
// </div>