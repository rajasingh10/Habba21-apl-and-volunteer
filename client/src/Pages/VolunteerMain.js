import React from 'react'
import { VolunteerRegistration } from './VolunteerRegistration'

const VolunteerMain = () => {
    return (

            <div>
                <div class="container register">
                    <div class="row">
                        <div class="col-md-3 register-left">
                            <img src="/logo.png" alt=""/>
                            <h3>Welcome!</h3>
                            <p>Please enter the following details to register for <br/> APL-2022</p>
                      
                        </div>
                        <div class="col-md-9 register-right">
                          
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 class="register-heading">Habba 2022 Volunteer Registration </h3>
                               <VolunteerRegistration/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
   
}

export default VolunteerMain
