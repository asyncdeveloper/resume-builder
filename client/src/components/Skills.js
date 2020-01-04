import React from 'react';

import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null,
};

function Skills(props) {
    const { values, handleChange, handleInputChange, handleKeyDown, prevStep, nextStep } = props;
    const { inputValue, skills } = values;

    return (
        <React.Fragment>
            <h2 className="form-title">Skills</h2>
            <CreatableSelect
                required={true}
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                name="inputValue"
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Input Skills here"
                value={skills}
            />
            <div className="loginhere">
                <button className="loginhere-link" onClick={prevStep}>Previous</button>
                <button className="loginhere-link" onClick={nextStep}>Next</button>
            </div>
        </React.Fragment>

    );
}

export default Skills;