import React, { Component } from 'react';
import BearValleyLogo from '../images/BearValleyLogo.png';
import ParkServiceLogo from '../images/ParkServiceLogo.png';
import BearValleyLodge from '../images/BearValleyLodge.jpg';
import mobileBearValleyLodge from '../images/mobileBearValleyLodge.jpg';
import Yosemite from '../images/yosemite.jpg';
import mobileYosemite from '../images/mobileYosemite.jpg';

export class Lodging extends Component {
    render() {
        return (<div className="container-fluid">
            <div className="row text-center pad-header p-b-3-em">
                <section className="bearValley">
                    <div className="col-12 pos-absolute">
                        <h1 className="text-center lodging-down color-white pos-relative"><strong>Lodging</strong></h1>
                    </div>
                    <img src={BearValleyLodge} className="img-fluid invisible hidden-xs" />
                    <img src={mobileBearValleyLodge} className="img-fluid invisible visible-xs" />
                </section>
                <div className="container bearValley-card">
                    <div className="row">
                        <div className="col-12 offset-md-2 col-md-8 bg-white lite-opacity shadow rounded p-t-1-em text-shadow">
                            <img src={BearValleyLogo} className="img-fluid center p-t-2-em" width="125" />
                            <h2><strong>Bear Valley Lodge</strong></h2>
                            <h4>
                                Saturday (8/12) is the actual Ceremony and Reception. We will be holding it at Bear
                    Valley which has enough space for everyone to sleep for the night. The prices of the rooms
                    depend on what size room you want to rent. They range between $120(1 person) - $150(4+ people).
                    You will need to book the room online through their website.
                        </h4>
                            <h3><strong>Book your room:</strong></h3>
                            <ol className="center-list p-b-2-em">
                                <li className="text-left">
                                    <h4>
                                        <a href="https://www.bookonthenet.net/west/premium/eresmain.aspx?id=dXMflENfG7snAKwvk5OegAWEgsb4c3UpZu8pKA9hGIw%3d#/search">
                                            Navigate to the Bear Valley Website
                                </a>
                                    </h4>
                                </li>
                                <li className="text-left">
                                    <h4>Select the Dates for Aug 12, 2017 - Aug 13, 2017</h4>
                                </li>
                                <li className="text-left">
                                    <h4>Select the number of Adults</h4>
                                </li>
                                <li className="text-left">
                                    <h4>Click the "Do you have a group code"?</h4>
                                </li>
                                <li className="text-left">
                                    <h4>Enter <strong><i>HarneyHall</i></strong> into the group code.</h4>
                                </li>
                                <li className="text-left">
                                    <h4>Search Availability</h4>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center p-t-3-em">
                <section className="yosemite">
                    <img src={Yosemite} className="img-fluid invisible hidden-xs" />
                    <img src={mobileYosemite} className="img-fluid invisible visible-xs" />
                </section>
                <div className="container yosemite-card">
                    <div className="row">
                        <div className="col-12 offset-md-2 col-md-8 bg-white lite-opacity shadow rounded p-t-1-em text-shadow">
                            <img src={ParkServiceLogo} className="img-fluid center" width="65" />
                            <h2><strong>Yosemite Cabins</strong></h2>
                            <h4>
                                We've rented all of the space we can afford at the moment which is 60 spaces at
                    6 large vacation rentals in the National Park. These spaces are for the people we
                    love, which means you! We've tried to do our best at tallying up the numbers.
                    I am anticipating that we will need more space, but at this point, were splitting
                    the cost among everyone staying the cabins.
                    </h4>
                            <h4><strong>We strongly suggest you download the maps for these locations as reception will be poor in the mountains.</strong></h4>
                            <h4>Cabin Locations:</h4>
                            <ul className="list-group">
                                <li className="list-group-item"><a href="https://goo.gl/maps/jFrSnE5YtCH2"><h4>Sport Chalet</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/3F9v1YAZ3PJ2"><h4>Hutching Cabin & Apt</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/AqCgQVJyjoJ2"><h4>Serenity Pines</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/4PUUoMjACYK2"><h4>Bird's Eye Vista</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/SGQNTNRTNCv"><h4>Seqoias West</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/SGQNTNRTNCv"><h4>Seqoias East</h4></a></li>
                                <li className="list-group-item"><a href="https://goo.gl/maps/heCMo7pve742"><h4>Coyote Creek</h4></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}