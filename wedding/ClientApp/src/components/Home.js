import React, { Component } from 'react';
import BrianProfileLg from '../images/BrianProfileLg.jpg';
import BrianProfileSm from '../images/BrianProfileSm.jpg';
import ElizabethProfileLg from '../images/ElizabethProfileLg.jpg';
import ElizabethProfileSm from '../images/ElizabethProfileSm.jpg';
import Background from '../images/banner.jpg';
import mobileBackground from '../images/mobileBanner.jpg';
import Story from '../images/Chicago.png';
import mobileStory from '../images/mobileStory.png';
import Adventures from '../images/Adventures.png';
import mobileAdventures from '../images/mobileAdventures.png';

export class Home extends Component {


    render() {
        return (<div className="gradient-background home-pad-header">
            <div className="background">
                <section className="b-border shadow m-b-3-em xs-pad-bottom" ref="content">
                    <img src={Background} className="img-fluid invisible d-none d-sm-block" />
                    <img src={mobileBackground} className="img-fluid invisible d-block d-sm-none" />
                </section>
                <div className="container-fluid pos-relative move-up">
                    <section className="row justify-content-center p-b-2-em">
                        <div className="col-12 col-sm-10 text-center color-white">
                            <h2 className="display-4">Our Story</h2>
                            <h4 className="lead">How the Bride and Groom met. </h4>
                        </div>
                        <div className="col-md-4 col-12 color-white">
                            <div className="profile-image max-w-245 center p-t-1-em p-b-1-em">
                                <img src={ElizabethProfileLg} className="img-fluid rounded-circle shadow d-none d-sm-block" alt="Marie Mills Yoga Instructor and Owner" />
                                <img src={ElizabethProfileSm} className="img-fluid rounded-circle shadow d-block d-sm-none" alt="Marie Mills Yoga Instructor and Owner" />
                                <div className="profile-text text-left align-bottom m-l-10 color-white text-center">
                                    <h3 className="m-t-0 m-b-0">Elizabeth Hall</h3>
                                    <p className="m-t-0 m-b-5">Bride</p>
                                </div>
                            </div>
                            <h4 className="text-left center">
                                <strong>From Brian:</strong>
                            </h4>
                            <hr />
                            <h4>
                                We first met in Chicago! This city is very near and dear to our hearts. We had our first kisses, our first dance, and our first I love you's here.
                                </h4>
                        </div>
                        <div className="col-md-4 col-12 color-white">
                            <div className="profile-image max-w-245 center p-t-1-em p-b-1-em">
                                <img src={BrianProfileLg} className="img-fluid rounded-circle shadow d-none d-sm-block" alt="Marie Mills Yoga Instructor and Owner" />
                                <img src={BrianProfileSm} className="img-fluid rounded-circle shadow d-block d-sm-none" alt="Marie Mills Yoga Instructor and Owner" />
                                <div className="profile-text text-left align-bottom m-l-10 text-center">
                                    <h3 className="m-t-0 m-b-0">Brian Harney</h3>
                                    <p className="m-t-0 m-b-5">Groom</p>
                                </div>
                            </div>
                            <h4 className="text-left">
                                <strong>From Elizabeth:</strong>
                            </h4>
                            <hr />
                            <h4>And while we will always have a place in our hearts for all our friends and family in this beautiful city, we wanted to explore the world! So we decided to move across the country to a sunny beach side town called San Diego.
                                </h4>
                        </div>
                    </section>
                    <section className="chicago">
                        <div className="row pos-relative d-none d-sm-block">
                            <div className="col-12 col-md-3 rel-chicago bg-white lite-opacity shadow rounded text-shadow pos-abs p-1-em">
                                <h4>We first met in Chicago! This city is very near and dear to our hearts. We had our first kisss, our first dance, and our first I love you's here.</h4>
                            </div>
                        </div>
                        <div className="row pos-relative d-none d-sm-block">
                            <div className="col-12 col-md-3 rel-move bg-white lite-opacity shadow rounded text-shadow pos-abs p-1-em">
                                <h4>And while we will always have a place in our hearts for all our friends and family in this beautiful city, we wanted to explore the world! So we decieded to move across the country to a sunny beach side town called San Diego.</h4>
                            </div>
                        </div>
                        <img src={Story} className="img-fluid invisible d-none d-sm-block" />
                        <img src={mobileStory} className="img-fluid invisible d-block d-sm-none" />
                    </section>
                    <section className="adventures">
                        <div className="row pos-relative d-none d-sm-block">
                            <div className="col-12 col-md-3 rel-san-diego bg-white lite-opacity shadow rounded text-shadow pos-abs p-1-em">
                                <h4>We had packed up all of our belongings into two cars and drove five days across the country. Luckily for us, Brian's old crappy car didn't break down.</h4>
                                <h4>San Diego was incredible! The beaches were beautiful, and palm trees were plentiful. But unfortunately Elizabeth doesn't tan, she BURNS! And so we continued on in search for a more climate city.</h4>
                            </div>
                        </div>
                        <div className="row pos-relative d-none d-sm-block">
                            <div className="col-12 col-md-5 rel-san-francisco bg-white lite-opacity shadow rounded text-shadow pos-abs p-1-em">
                                <h4>And then there was San Francisco! <i className="fa fa-heart" /></h4>
                                <h4>This beautiful city has truely captivated us. The food, the culture, the way the fog rolls over the mountains and into the city are just magical! We've been blessed with the opportunity to get to know our West Coast family, but our heart breaks everyday for our true love, Chicago.</h4>
                                <h4>Who knows what our next adventure will be. Maybe to Scotland, Japan, or Australia. We're still waiting to see what the future holds.</h4>
                            </div>
                        </div>
                        <img src={Adventures} className="img-fluid invisible d-none d-sm-block" />
                        <img src={mobileAdventures} className="img-fluid invisible d-block d-sm-none" />
                    </section>
                </div>
            </div>
        </div>);
    }
}
