import React, { useEffect, useState } from "react";
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


// 
const departments = (value) =>{

  if(value == "AIT"){
      return  ["AE|Aeronutical Engineering","CV|Civil Engineering","AI/ML| Artificial Intelligence & Machine Learning Engg.","AU|Automobile Engineering","BT|BioTechnology Engineering","AE|Aeronutical Engineering","CSE|Computer Science Engineering","CTM|Construction Technology & Management ","EEE|Electrical & Electronic Engineering","ECE|Electronics & Communication Engineering","ISE|Information Science & Engineering","ME|Mechanical Engineering","MSE|Manufacturing Science","MT|Mechatronics Engineering","MN|Mining Engineering","MBA|Master of Buisness Administration","MCA|Master of Computer Applications","MCFI|M.Tech in Cyber Forensics and Information Security","MCNE|M.Tech in Computer Network Engineering","MCSE|M.Tech in Computer Science and Engineering","MPSE|M.Tech in Power Systems and Engineering","MDCE|M.Tech in Digital Communication and Engineering","MBT|M.Tech in Bio Technology","MMD|M.Tech in Machine Design","OTH|Others"];
    } else if(value == "ANRVASA"){
      return  ["Arch|Bachelor Of Architecture","OTH|Others"];
    } else if(value == "ABMRCP"){
      return  ["DP|D.Pharm","BP|B.Pharm","MP|M.Pharm","PD|Pharm D","OTH|Others"];
    }
    else if(value == "ASM"){
      return  ["PGDM|P.G.D.M","OTH|Others"];
    }
    else if(value == "ASE"){
      return  ["DEE|Diploma in Elementary Education","BE|Bachelor of Education","OTH|Others"];
    }
    else if(value == "AIGS"){
      return  ["BAJ|Bachelor of Arts in Journalism","BSC|Bachelor of science","BA|Bachelor of Arts","BSW|Bachelor of Social work","BBAI|Bachelor of Business Administration International Immersion","BC|Bachelor of Commerce","BCA|Bachelor of Computer Application","BBA|Bachelor of Business Application","BSCF|Bsc in Fashion and Apparel Design","ME|Master of Arts in Economics","MAE|Master of Arts in English","MSE|Master of Science in Electronic Media","MAJ|Master of Arts in Journalism and Mass Communication","MSW|Master of Social Work","MIB|Master of International Business","MFA|Master in Finance and Accounting","MC|Master of Commerce","MSP|Master of Science in Physics","MSC|Master of Science in Chemistry","MSM|Master of Science in Mathematics","MSPy|Master of Science in Psychology","MsF|Master of Science in Fashion and Apparel Design","OTH|Others"];
    }
      else if(value == "AP"){
      return  ["AE|Aeronautical Engineering","ADFT|Apparel Design & Fabrication Technology","ArchE|Architecture Engineering","AuE|Automobile Engineering","CE|Civil Engineering","CP|Commercial Practise","CSE|Computer Science and Engineering","EEE|Electrical & Electronics Engineering","ECE|Electrical & Communication Engineering","ME|Mechanical Engineering","MtE|Mechatronics Engineering","MiE|Mining Engineering","OTH|Others"];
    }
    else if(value == "SNSN"){
      return  ["GNM|General Nursing and MidWife","BBN|Basic BSc Nursingy","PBBN|Post Basic BSc Nursing","MN|Msc Nursing","OTH|Others"];
    }
    else if(value == "SNCN"){
       return  ["BBN|Basic BSc Nursingy","PBBN|Post Basic BSc Nursing","MN|Msc Nursing","OTH|Others"];
  }
    else if(value == "APC"){
      return  ["PCMB|Science-Physics Chemistry Mathematics and Biology","PCMC|Science-Physics Chemistry Mathematics and Computer Science","PCME|Science-Physics Chemistry Mathematics and Electronics","COM|Commerce-Computer Science Economics Business Studies and Accountancy","OTH|Others"];
    }
    else if(value == "ASL"){
      return  ["BA LLB|BA LLB","LLB|LLB","BBA LLB|BBA LLB","OTH|Others"];
    }
    else if(value == "ASD"){
      return  ["PA|Painting","GD|Graphics Design","AMD|Animation and Multimedia Design","ISD|Interior and Spatial Design","PD|Product Designy","OTH|Others"];
    }
    else if(value == "AIAS"){
        return  ["BAT|B.Sc in Anesthesia Technology","BOTT|B.Sc Operation Theater Technology","BRCT|B.Sc in Renal Dialysis Technology","BRT|BSc in Radio Therapy","BO|BSc in Optometry","OTH|Others" ];
      }
      else if(value == "AIP"){
        return  ["BOP|Bachelor of Physiotheraphy","OTH|Others"];
      }
      else if(value == ""){
        return  ["|"];
      }
  
  }


const [Depts, setDepts] = useState([])



useEffect(() => {
console.log('hi')
setDepts ( departments(state.college))
console.log(departments(state.college))
}, [state.college])



const [deptElement, setDeptElement] = useState([])

let final  

useEffect(() => {
  console.log('depts' , Depts)
 final = Depts?.map((ea)=>{

return <option value={ea.split('|')[0]}>{ea.split('|')[1]}</option> 

 }) 

 setDeptElement(final)
console.log(final)
}, [Depts])




// 




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
       
        
        <select       placeholder="College" class="form-control"  required  onChange={e=>{setState({...state,college:e.target.value});
      }}>
                          <option selected value="">Choose Your Institute</option>
                          <option value="AIT">Acharya Institute of Technology</option>
                          <option value="ANRVASA">Acharya's NRV School of Architecture</option>
                          <option value="ABMRCP">Acharya & B.M. Reddy College of Pharmacy</option>
                          <option value="ASM">Acharya School of Management</option>
                          <option value="AP">Acharya Polytechnic</option>
                          <option value="AIGS">Acharya Institute of Graduate Studies</option>
                          <option value="SNSN">Smt. Nagarathnamma School of Nursing</option>
                          <option value="SNCN"> Smt. Nagarathnamma College of Nursing</option>
                          <option value="ASE">Acharya College of Education</option>
                          <option value="APC"> Acharya Pre-University College</option>
                          <option value="ASL">Acharya School of Law</option>
                          <option value="ASD">Acharya School of Design</option>
                          <option value="AIAS">Acharya Institute of Allied Science</option>
                          <option value="AIP">Acharya's NR Institute of Physiotheraphy</option>
                          <option  value="OTH">Others</option> <br/> 
                          </select>

        

        
        </div>
       <div class="form-group">

       <select       placeholder="department" class="form-control"  required  onChange={e=>{setState({...state,department:e.target.value});
      }}>
                          <option selected value="">Choose Your Department</option>

{deptElement}

      </select>
{/* 
        <input
        className='form-control'
          type="text"
          required
          placeholder="Department"
          name="department"
          value={state.department}
          onChange={e=>{setState({...state,department:e.target.value})}}
        /> */}
        </div>
      
{/*  */}



{/*  */}
        <div class="form-group">


        <select       placeholder="" class="form-control"  required  onChange={e=>{setState({...state,year:e.target.value});
      }}>
                          <option selected value="">Year Of Study</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                          <option value="5">5th Year</option>
                          <option value="6">6th Year</option>

        </select>


        {/* <input
        className='form-control'
          type="number"
          placeholder="Year Of Study"
          name="year"
          value={state.year}
          onChange={e=>{setState({...state,year:e.target.value})}}
        /></div> */}
</div>


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
