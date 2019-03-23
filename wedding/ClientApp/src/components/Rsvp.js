import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

function loadReCaptchaScript(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = src;
}

export class Rsvp extends Component {
    state = {
        Guest: {
            selectedValue: new Array(),
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        dinnerRequired: false,
        breakfastRequired: false,
        isLoading: false
    }

    componentDidMount() {
        //ReactDOM.findDOMNode(reCaptcha).setAttribute("data-sitekey", "6LfSGSgUAAAAACHEiZ1mvIdweGQcGTOxxsA-dtbn");
        //ReactDOM.findDOMNode(reCaptcha).setAttribute("data-callback", "imNotARobot");
        //window.imNotARobot = this.imNotARobot;
        //if (!grecaptcha)
        //    loadReCaptchaScript('https://www.google.com/recaptcha/api.js');
    }

    imNotARobot(response) {
        document.getElementById("reCaptcha-alert").classList.add("hide");
    }

    selectCheckbox(id, val) {
        let Guest = this.state.Guest;
        Guest.selectedValue[parseInt(id)] = val;
        this.setState({ Guest: Guest });

        if (Guest.selectedValue[0]) {
            document.getElementById("dinner-alert").classList.add("hide");
            this.setState({ dinnerRequired: false });
        }
        if (Guest.selectedValue[1]) {
            document.getElementById("breakfast-alert").classList.add("hide");
            this.setState({ breakfastRequired: false });
        }
    }

    SubmitForm(event) {
        event.preventDefault();

        let guest = this.state.Guest;
        if (!guest.selectedValue[0]) {
            document.getElementById("dinner-alert").classList.remove("hide");
            this.setState({ dinnerRequired: true });
            return false;
        }
        if (!guest.selectedValue[1]) {
            document.getElementById("breakfast-alert").classList.remove("hide");
            this.setState({ breakfastRequired: true });
            return false;
        }
        let recaptcha = ReactDOM.findDOMNode(document.getElementById("g-recaptcha-response")).value
        if (!recaptcha) {
            document.getElementById("reCaptcha-alert").classList.remove("hide");
            return false;
        }
        if (!guest.name) {
            alert("Please enter your name before submitting your RSVP.");
            return false;
        }
        ReactDOM.findDOMNode(document.getElementById("rsvp")).disabled = true;
        this.setState({ isLoading: true });
        return new Promise((resolve, reject) => {
            axios.post('/api/SampleData/RSVPAsync', {
                body: JSON.stringify(guest)
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        Guest: {
                            selectedValue: new Array(),
                            name: "",
                            email: "",
                            phone: "",
                            message: ""
                        },
                        dinnerRequired: false,
                        breakfastRequired: false,
                        isLoading: false
                    });
                    resolve();
                    window.scrollTo(0, 0);
                    this.props.history.push('/rsvpConfirmation');
                }).catch(error => {
                    console.log("Request Failed: ", error);
                })
        });
    }

    hasValue(value, id) {
        if (this.state.Guest.selectedValue) {
            return true;
        }
        return false;
    }

    renderCheckBox(id, value, label) {
        return (<label htmlFor={value} onClick={() => this.selectCheckbox(id, value)}>
            <input id={value}
                checked={this.state.Guest.selectedValue[id] === value}
                type="checkbox"
                value={value} /> {label}
        </label>)
    }
    onChange(event) {
        const field = event.currentTarget.name;
        let Guest = this.state.Guest;
        Guest[field] = event.currentTarget.value;
        return this.setState({ Guest: Guest });
    }

    onChangeTextArea(event) {
        const field = event.currentTarget.name;
        let Guest = this.state.Guest;
        Guest[field] = event.currentTarget.value;
        return this.setState({ Guest: Guest });
    }

    renderLoading() {
        if (this.state.isLoading) {
            return (<button id="rsvp" type="submit" onClick={(event) => this.SubmitForm(event)} value="getResponse" className="btn btn-primary btn-block btn-lg">
                Sending <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            </button>)
        }
        return (<button id="rsvp" type="submit" onClick={(event) => this.SubmitForm(event)} value="getResponse" className="btn btn-primary btn-block btn-lg">
            Send <i className="glyphicon glyphicon-send" aria-hidden="true"></i>
        </button>)
    }

    render() {
        return (<div className="container pad-header text-center">
            <div className="row">
                <div className="col-12">
                    <h1><strong>RSVP</strong></h1>
                    <h2>Please let us know your coming so we can included in our plans!<br />
                        We need a good head count for meals, accommodations, and travel.
                </h2>
                    <div className="col-lg-10 offset-lg-1 col-12 text-center">
                        <form role="form" className="form-group form-horizontal">
                            <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                <input required aria-required="true" type="text" onChange={(event) => this.onChange(event)} name="name" className="form-control" value={this.state.Guest.name} placeholder="Name" />
                                {this.state.Guest.name ? "" : <h5 className="text-danger text-left p-t-0 p-b-0"><strong>Required*</strong></h5>}
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                <input type="email" onChange={(event) => this.onChange(event)} name="email" className="form-control" value={this.state.Guest.email} placeholder="Email" />
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                <input type="text" onChange={(event) => this.onChange(event)} name="phone" className="form-control" value={this.state.Guest.phone} placeholder="Phone" />
                            </div>
                            <div className="col-lg-12 col-12 p-b-5">
                                <h2 className="m-t-0">Wedding Reception Dinner and Breakfast</h2>
                            </div>
                            <div className="col-lg-12 col-12 p-b-5 well p-t-0">
                                <h3>Please select the dinner item you will be eating.</h3>
                                <div id="dinner-alert" className="hide col-lg-12 col-12 p-t-0">
                                    <div className="alert alert-danger text-center"><h4><strong>Please select a dinner option before submitting your RSVP.</strong></h4></div>
                                </div>
                                <div className="col-12 offset-md-3 col-md-2">
                                    {this.renderCheckBox("0", "BBQ Ribs", "BBQ Ribs")}
                                </div>
                                <div className="col-12 col-md-2">
                                    {this.renderCheckBox("0", "Chicken", "Chicken")}
                                </div>
                                <div className="col-12 col-md-2">
                                    {this.renderCheckBox("0", "Vegetarian", "Vegetarian")}
                                </div>
                            </div>
                            <div className="col-lg-12 col-12 p-b-0 well p-t-0">
                                <label><h3>Are you joining us the morning after the wedding for Breakfast?</h3></label>
                                <div id="breakfast-alert" className="hide col-lg-12 col-12 p-t-0">
                                    <div className="alert alert-danger text-center"><h4><strong>Please let us know if you will be attending breakfast before submitting your RSVP</strong></h4></div>
                                </div>
                                <div className="col-4 col-offset-2 offset-md-4 col-md-2">
                                    {this.renderCheckBox("1", "true", "Yes")}
                                </div>
                                <div className="col-4 col-md-2">
                                    {this.renderCheckBox("1", "false", "No")}
                                </div>
                            </div>
                            <div className="col-lg-12 col-12 p-b-5 p-t-0">
                                <label htmlFor="message" className="p-t-0"><h3 className="m-t-0">Do you have any allergies or food sensitivities?</h3></label>
                                <textarea id="message" onChange={(event) => this.onChangeTextArea(event)} name="message" spellCheck={true} value={this.state.Guest.message} className="form-control margin-bottom" rows={8} placeholder="Your message here.." />
                            </div>
                            <div className="col-md-4 offset-md-4 col-12 text-center p-b-5">
                                <div className="form-group">
                                    <div id="reCaptcha-alert" className="alert alert-danger hide"><h4><strong>Please verify you are not a robot.</strong></h4></div>
                                    <div className="g-recaptcha" id="g-recaptcha" ref={(recaptcha) => { this.reCaptcha = recaptcha; }} />
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-4 col-12 text-center p-b-5">
                                {this.renderLoading()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}
