import React from 'react';

function Education(props) {
    const { values, handleChange, prevStep, nextStep } = props;

    return (
        <form method="POST" className="signup-form">
            <h2 className="form-title">Education Information</h2>
            <div className="form-group">
                <input type="text" className="form-input" name="institution" placeholder="Institution"
                   onChange={handleChange}
                   defaultValue={values.institution} />
            </div>
            <div className="form-group">
                <input type="text" className="form-input" name="qualification" placeholder="Qualification"
                   onChange={handleChange} defaultValue={values.qualification} />
            </div>
            <div className="form-group">
                <input type="date" className="form-input" name="startDate" placeholder="Start Date"
                   onChange={handleChange} defaultValue={values.startDate} />
            </div>
            <div className="form-group">
                <input type="date" className="form-input" name="endDate" placeholder="End Date"
                   onChange={handleChange} defaultValue={values.endDate} />
            </div>

            <div className="loginhere">
                <button className="loginhere-link" onClick={prevStep}>Previous</button>
                <button className="loginhere-link" onClick={nextStep}>Next</button>
            </div>
        </form>
    );
}

export default Education;
