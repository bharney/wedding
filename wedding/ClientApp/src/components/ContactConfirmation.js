import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import BrianProfileLg from '../images/BrianProfileLg.jpg';
import ElizabethProfileLg from '../images/ElizabethProfileLg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class ContactConfirmation extends Component {

    render() {
        return (<div className="container pad-header text-center">
            <div className="row">
                <div className="col-12">
                    <h1><strong>Thank you! Your message has been sent.</strong></h1>
                    <h2>You should recive an email confirmation of your Message based on the information you entered.</h2>
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
                        <div className="col-12 col-md-10 offset-md-1 text-center">
                            <h2>Please contact us if you have any questions, or need to change your RSVP.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
