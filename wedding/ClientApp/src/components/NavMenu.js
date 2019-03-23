import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import JQuery from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faBed, faCalendar, faGift, faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

export class NavMenu extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onClick = () => {
        window.scrollTo(0, 0);
    };
    onHome = () => {
        window.scrollTo(0, 0);
    };
    handleScroll() {
        let navbar = ReactDOM.findDOMNode(document.getElementById('custom-nav'))
        let bounding = navbar.getBoundingClientRect()
        let offset = bounding.top + document.body.scrollTop
        if (offset > 50) {
            navbar.classList.add("affix");
            navbar.classList.remove("top-nav-collapse");
        } else {
            navbar.classList.remove("affix");
            navbar.classList.remove("top-nav-collapse");
        }
    }

    render() {
        return (<nav id="custom-nav" className='navbar navbar-expand-sm navbar-dark fixed-top light-hue main-nav'>
            <strong><Link className='navbar-brand' onClick={this.onHome} to={'/'}>B <FontAwesomeIcon icon={faHeart} /> E</Link></strong>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/travel'} onClick={this.onClick} exact activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faBus} /> Travel</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/lodging'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faBed} /> Lodging</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/events'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faCalendar} /> Events</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/wedding'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faHeart} /> Wedding</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/rsvp'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faEnvelope} /> RSVP</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/registry'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faGift} /> Gift Registry</strong>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/contact'} onClick={this.onClick} activeClassName='active'>
                            <strong><FontAwesomeIcon icon={faPhone} /> Contact</strong>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>);
    }
}
