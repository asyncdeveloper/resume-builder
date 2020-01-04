import React, { Component } from 'react';
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import axios from 'axios';
import { saveAs } from 'file-saver';

export default class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 4,
            name: '',
            phone: '',
            country: '',
            city: '',
            headline: '',

            jobTitle : '',
            jobCompany: '',
            jobStart: '',
            jobEnd: '',
            JobDesc: '',

            institution: '',
            qualification: '',
            startDate: '',
            endDate: '',

            inputValue: '',
            skills: [],
        };
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        })
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step : step - 1
        })
    };

    downloadResume = () => {
        const data = this.state;
        axios.post('/resume', data)
            .then(() => axios.get('/resume', { responseType: 'blob' }))
            .then((res) => {
                saveAs(
                    new Blob([res.data], { type: 'application/pdf' }),
                    'ResumeOutput.pdf'
                );
            });
    };

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    };

    createOption = (label) => ({
        label,
        value: label,
    });

    handleInputChange = (inputValue) => {
        this.setState({ inputValue });
    };

    handleKeyDown = (event) => {
        const { inputValue, skills } = this.state;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    inputValue: '',
                    skills: [...skills, this.createOption(inputValue)],
                });
                event.preventDefault();
        }
    };

    render(){
        const { step } = this.state;
        const defaultComponent = <ContactInfo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            addMore = {this.addMore}
            handleChange = {this.handleChange}
            values={ this.state }
        />;

        switch(step) {
            case 1:
                return defaultComponent;
            case 2:
                return <Experience
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={ this.state }
                />;
            case 3:
                return <Education
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={ this.state }
                />;
            case 4:
                return <Skills
                    prevStep={this.prevStep}
                    nextStep={this.downloadResume}
                    handleChange = {this.handleChange}
                    handleInputChange={this.handleInputChange}
                    handleKeyDown={this.handleKeyDown}
                    values={ this.state }
                />;
            case 5:
                return (
                    <h1>Success Your Resume is downloading</h1>
                );
            default:
                return defaultComponent;
        }
    }
}
