import React from 'react';

function ContactInfo( props ) {
    const { values, handleChange, prevStep, nextStep } = props;
    return (
       <form method="POST" className="signup-form">
           <h2 className="form-title">Contact Information</h2>
           <div className="form-group">
               <input type="text" className="form-input" name="name" placeholder="John Doe"
                  onChange={handleChange}
                  defaultValue={values.name} />
           </div>
           <div className="form-group">
               <input type="email" className="form-input" name="email" placeholder="Your Email"
                  onChange={handleChange}
                  defaultValue={values.email} />
           </div>
           <div className="form-group">
               <input type="text" className="form-input" name="phone" placeholder="Your Phone Number"
                  onChange={handleChange}
                  defaultValue={values.phone} />/>
           </div>
           <div className="form-group">
               <input type="text" className="form-input" name="country" placeholder="Country"
                  onChange={handleChange}
                  defaultValue={values.country} />
           </div>
           <div className="form-group">
               <input type="text" className="form-input" name="city" placeholder="City"
                  onChange={handleChange}
                  defaultValue={values.city} />
           </div>
           <div className="form-group">
               <textarea className="form-input" name="headline" placeholder="Profile Headline"
                      onChange={handleChange} defaultValue={values.headline}/>
           </div>
           <div className="loginhere">
               <button className="loginhere-link" onClick={prevStep}>Previous</button>
               <button className="loginhere-link" onClick={nextStep}>Next</button>
           </div>
       </form>
    );
}

export default ContactInfo;
