import React, { Component } from 'react';
import ZolaLogo from '../images/zola-logo-blue.jpg';

export class Registry extends Component {
    render() {
        return (<div className="col-12 offset-md-2 col-md-8 text-center pad-header">
            <h1><strong>Wedding Registry</strong></h1>
            <h3>If you are interested in viewing our registry and helping contribute to our wonderful adventures, please click on the logo below.</h3>
            <a href="https://www.zola.com/registry/briguyandliz"><img src={ZolaLogo} className="img-fluid center" width="225" alt="wedding registry"/></a>
        </div>);
    }
}