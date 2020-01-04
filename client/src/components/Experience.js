import React from 'react';

function Experience(props) {
    const { values, handleChange, prevStep, nextStep } = props;

    return (
        <form method="POST" className="signup-form">
            <h2 className="form-title">Experience Information</h2>
            <div className="form-group">
                <input type="text" className="form-input" name="jobTitle" placeholder="Role"
                   onChange={handleChange}
                   defaultValue={values.jobTitle} />
            </div>
            <div className="form-group">
                <input type="text" className="form-input" name="jobCompany" placeholder="Company"
                   onChange={handleChange}
                   defaultValue={values.jobCompany} />
            </div>
            <div className="form-group">
                <input type="date" className="form-input" name="jobStart" placeholder="Start Date"
                   onChange={handleChange}
                   defaultValue={values.jobStart} />/>
            </div>
            <div className="form-group">
                <input type="date" className="form-input" name="jobEnd" placeholder="End Date"
                   onChange={handleChange}
                   defaultValue={values.jobEnd} />
            </div>
            <div className="form-group">
                <textarea className="form-input" name="JobDesc"
                    rows={5} cols={5}
                    onChange={handleChange} placeholder="Description"
                    defaultValue={values.JobDesc} />
            </div>
            <div className="loginhere">
                <button className="loginhere-link" onClick={prevStep}>Previous</button>
                <button className="loginhere-link" onClick={nextStep}>Next</button>
            </div>
        </form>
    );
}

export default Experience;
