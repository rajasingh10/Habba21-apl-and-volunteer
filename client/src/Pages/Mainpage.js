import React, { useState } from 'react'
import AplRegistrationForm from './AplRegistraionForm'

const Mainpage = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="/apllogo.png" alt=""/>
                        <h3>Welcome!</h3>
                        <p>Please enter the following details to register for <br/> APL-2022</p>
                        {/* <input type="submit" name="" value="Volunteer Registration"/><br/> */}
                    </div>
                    <div class="col-md-9 register-right">
                      
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Acharya Premier League </h3>
                                        <AplRegistrationForm loading={loading} setLoading={setLoading}/>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mainpage
