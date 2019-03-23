import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export class Layout extends Component {
    render() {
        return (<div className='container-fluid'>
            <div className='row'>
                <NavMenu />
                {this.props.children}
                <div className="col-12 text-center p-t-2-em">
                    <p><strong>Made with <FontAwesomeIcon icon={faHeart} /> by Brian Harney</strong></p>
                </div>
            </div>
        </div>);
    }
}