import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import BrianProfileLg from '../images/BrianProfileLg.jpg';
import ElizabethProfileLg from '../images/ElizabethProfileLg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faPaperPlane, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function loadReCaptchaScript(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = src;
}
let grecaptcha;
export class ContactUs extends Component {
    state = {
        Contact: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        isLoading: false
    }
    componentDidMount() {
        let reCaptcha = document.getElementById("g-recaptcha")
        reCaptcha.setAttribute("data-sitekey", "6LfSGSgUAAAAACHEiZ1mvIdweGQcGTOxxsA-dtbn");
        reCaptcha.setAttribute("data-callback", "imNotARobot");
        window.imNotARobot = this.imNotARobot;

        if (!grecaptcha)
            loadReCaptchaScript('https://www.google.com/recaptcha/api.js');
    }

    imNotARobot(response) {
        document.getElementById("reCaptcha-alert").classList.add("d-none");
    }

    onChange(event) {
        const field = event.currentTarget.name;
        let Contact = this.state.Contact;
        Contact[field] = event.currentTarget.value;
        return this.setState({ Contact: Contact });
    }

    onChangeTextArea(event) {
        const field = event.currentTarget.name;
        let Contact = this.state.Contact;
        Contact[field] = event.currentTarget.value;
        return this.setState({ Contact: Contact });
    }

    SubmitForm(event) {
        event.preventDefault();
        let contact = this.state.Contact;
        debugger;
        let recaptcha = document.getElementById("g-recaptcha-response").value
        if (!recaptcha) {
            document.getElementById("reCaptcha-alert").classList.remove("d-none");
            return false;
        }
        if (!contact.name) {
            alert("Please enter your name so we know who to contact.");
            return false;
        }
        if (!contact.email) {
            alert("Please enter your email address so we know how to get back to you.");
            return false;
        }
        document.getElementById("rsvp").disabled = true;
        this.setState({ isLoading: true });
        return new Promise((resolve, reject) => {
            axios.post('/api/SampleData/ContactAsync', {
                Name: contact.name,
                Email: contact.email,
                Phone: contact.phone,
                Message: contact.message
            }).then(() => {
                this.setState({
                    Contact: {
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    },
                    isLoading: false
                });
                resolve();
                window.scrollTo(0, 0);
                this.props.history.push('/contactConfirmation');
            }).catch(error => {
                console.log("Request Failed: ", error);
            })
        });
    }

    renderLoading() {
        if (this.state.isLoading) {
            return (<button id="rsvp" type="submit" onClick={(event) => this.SubmitForm(event)} value="getResponse" className="btn btn-primary btn-block btn-lg">
                Sending <FontAwesomeIcon icon={faSpinner} spin />
            </button>)
        }
        return (<button id="rsvp" type="submit" onClick={(event) => this.SubmitForm(event)} value="getResponse" className="btn btn-primary btn-block btn-lg">
            Send <FontAwesomeIcon icon={faPaperPlane} />
        </button>)
    }

    render() {
        return (<div className="container pad-header text-center">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center"><strong>Contact Us</strong></h1>
                    <h3 className="text-center">Let us know if you have any questions or concerns. <br />We would love to hear from you!</h3>
                    <div className="col-12 text-center">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-5">
                                <div className="color-white m-l-0 p-l-0">
                                    <div className="profile-image max-w-245 center p-b-1-em">
                                        <img src={ElizabethProfileLg} className="img-fluid center rounded-circle shadow" alt="Marie Mills Yoga Instructor and Owner" />
                                        <div className="profile-text text-left align-bottom m-l-10">
                                            <p className="m-t-0 m-b-5">Bride</p>
                                            <h3 className="m-t-0 m-b-0">Elizabeth Hall</h3>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group text-left">
                                    <li className="list-group-item">
                                        <h4><FontAwesomeIcon icon={faPhone} /> Phone: (708) 310-5765</h4>
                                    </li>
                                    <li className="list-group-item">
                                        <h4><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:eahall515@gmail.com">eahall515@gmail.com</a></h4>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 offset-md-2 col-md-5">
                                <div className="color-white text-center m-l-0 p-l-0">
                                    <div className="profile-image max-w-245 xs-profile center p-b-1-em">
                                        <img src={BrianProfileLg} className="img-fluid center rounded-circle shadow" alt="Marie Mills Yoga Instructor and Owner" />
                                        <div className="profile-text text-left align-bottom m-l-10">
                                            <p className="m-t-0 m-b-5">Groom</p>
                                            <h3 className="m-t-0 m-b-0 text-shadow">Brian Harney</h3>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group text-left">
                                    <li className="list-group-item">
                                        <h4><FontAwesomeIcon icon={faPhone} /> Phone: (630) 849-6948</h4>
                                    </li>
                                    <li className="list-group-item">
                                        <h4><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:bharney0@gmail.com">bharney0@gmail.com</a></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 offset-md-1 text-center mt-3">
                            <h2>Call, Email, or use the form below to get in touch with us.</h2>
                        </div>
                        <form role="form" className="form-group form-horizontal mt-3">
                            <div className="form-row">
                                <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                    <input required aria-required="true" type="text" onChange={(event) => this.onChange(event)} name="name" className="form-control" value={this.state.Contact.name} placeholder="Name" />
                                    {this.state.Contact.name ? "" : <h5 className="text-danger text-left p-t-0 p-b-0"><strong>Required*</strong></h5>}
                                </div>
                                <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                    <input type="email" onChange={(event) => this.onChange(event)} name="email" className="form-control" value={this.state.Contact.email} placeholder="Email" />
                                    {this.state.Contact.email ? "" : <h5 className="text-danger text-left p-t-0 p-b-0"><strong>Required*</strong></h5>}
                                </div>
                                <div className="col-lg-4 col-sm-4 col-12 p-b-5">
                                    <input type="text" onChange={(event) => this.onChange(event)} name="phone" className="form-control" value={this.state.Contact.phone} placeholder="Phone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12 col-12 p-b-5 p-t-0">
                                    <textarea id="message" onChange={(event) => this.onChangeTextArea(event)} name="message" spellCheck={true} value={this.state.Contact.message} className="form-control margin-bottom" rows={8} placeholder="Your message here.."></textarea>
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-4 col-12 text-center p-b-5">
                                <div className="form-group">
                                    <div id="reCaptcha-alert" className="alert alert-danger d-none"><h4><strong>Please verify you are not a robot.</strong></h4></div>
                                    <div className="g-recaptcha" id="g-recaptcha" ref={(recaptcha) => { this.reCaptcha = recaptcha; }}></div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-4 col-12 text-center p-b-5">
                                {this.renderLoading()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

