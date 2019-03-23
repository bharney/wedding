import React, { Component } from 'react';

export class Travel extends Component {
    state = {
        bearValley: [{
            position: { lat: 38.4651079, lng: -120.0424736 },
            showInfo: true,
            infoContent: ("Bear Valley Lodge 265 Bear Valley Rd, Bear Valley, CA 95223"),
        }],
        yosemite: [{
            position: { lat: 37.6514202, lng: -119.7242767 },
            showInfo: true,
            infoContent: ("7296 Yosemite Park Way, Yosemite National Park, CA 95389"),
        }],
        airport: [{
            position: { lat: 37.6207109, lng: -122.3782644 },
            showInfo: true,
            infoContent: ("San Francisco International Airport (SFO)"),
        }]
    };

    render() {
        return (<div className="container-fluid">
            <div className="row text-center">
                <div className="col-12 pad-header">
                    <h1><strong>Travel Directions</strong></h1>
                    <div className="col-12 col-md-8 offset-md-2 p-b-3-em">
                        <h3><strong>We strongly suggest you download the maps for these locations as reception will be poor in the mountains.</strong></h3>
                    </div>
                    <div className="row p-b-3-em">
                        <div className="col-12 col-md-5 offset-md-1 form-group">
                            <div className="circle-number"><strong>1</strong></div>
                            <h3><strong>San Francisco Airport <i className="fa fa-long-arrow-right fg-lg" aria-hidden="true" /> Yosemite</strong></h3>
                            <h4>7296 Yosemite Park Way, <br />Yosemite National Park, CA 95389</h4>
                            <br />
                            <a href="https://goo.gl/maps/v5CwC38eAAp"><h4 className="text-uppercase">Get Directions</h4></a>
                            <div className="col-12 offset-md-1 col-md-10">
                                <h4>When you arrive at the SFO Airport, Call or Text Us. We are picking up guests from the Airport</h4>
                                <h4>Home Address<br /><a href="https://goo.gl/maps/vzNyYNe9Ys92">6628 Telegraph Ave Oakland, CA</a></h4>
                                <h4>Yosemite Cabins<br /><a href="https://goo.gl/maps/v5CwC38eAAp">7296 Yosemite Park Way, Yosemite National Park</a> </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 form-group p-05-em hidden-xs shadow">
                            
                        </div>

                        <div className="col-12 col-md-5 offset-md-1 form-group">
                            <div className="circle-number"><strong>2</strong></div>
                            <h3><strong>Yosemite <i className="fa fa-long-arrow-right fg-lg" aria-hidden="true"/> Bear Valley</strong></h3>
                            <h4>Bear Valley Lodge, <br />265 Bear Valley Rd, <br />Bear Valley, CA 95223</h4>
                            <br />
                            <a href="https://goo.gl/maps/8h23LikRN7J2"><h4 className="text-uppercase">Get Directions</h4></a>
                            <br />
                            <h4>Address for Wedding Ceremony <br />
                                <a href="https://goo.gl/maps/vm6ydzTekpA2">Bear Valley Ski Resort, 2280 state Rte 207, Bear Valley, CA 95223</a>
                            </h4>
                            <h4>Address for Reception and Bear Valley Lodge <br />
                                <a href="https://goo.gl/maps/dG91FRRShk62">Bear Valley Lodge 265 Bear Valley Rd, Bear Valley, CA 95223</a>
                            </h4>
                        </div>
                        <div className="col-12 col-md-4 form-group p-05-em hidden-xs shadow">
                            
                        </div>
                        <div className="col-12 col-md-5 offset-md-1 form-group">
                            <div className="circle-number"><strong>3</strong></div>
                            <h3><strong>Bear Valley <i className="fa fa-long-arrow-right fg-lg" aria-hidden="true"/> San Francisco Airport</strong></h3>
                            <h4>San Francisco International Airport <br />San Francisco, CA 94128</h4>
                            <br />
                            <a href="https://goo.gl/maps/zgj8pVTXqPy"><h4 className="text-uppercase">Get Directions</h4></a>
                        </div>
                        <div className="col-12 col-md-4 form-group p-05-em hidden-xs shadow">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}