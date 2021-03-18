import React from 'react'
import AplRegistrationForm from './AplRegistraionForm'

const Mainpage = () => {
    return (
        <div>
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="/apllogo.png" alt=""/>
                        <h3>Welcome!</h3>
                        <p>Please enter the following details to register for <br/> APL-2021</p>
                        {/* <input type="submit" name="" value="Volunteer Registration"/><br/> */}
                    </div>
                    <div class="col-md-9 register-right">
                      
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Acharya Premier League </h3>
                                        <AplRegistrationForm/>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mainpage
