import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Home.scss';

const fullWH = {
    width: '100%',
    height: '100%',
};

const Home = () => {
    return (
        <Row style={{...fullWH, marginLeft: 0, marginRight: 0}}>
            <div className="bg-image"/>
            <div className="home">
                <div className="build-business"/>
                <div className="build-business-container">
                    <img className="book-img"
                         src="https://jeffwalker.com/wp-content/uploads/2018/08/16_rules_white_tilted.png"/>
                    <div className="business-form">
                        <div>Get the <span
                            style={{fontWeight: "bold"}}>behind-the-scenes strategies and secrets </span> used by the
                            world’s most successful online
                            entrepreneurs. These are powerful tactics that I’ve used to launch and grow my own online
                            business… and they can work for you, too.
                        </div>
                        <div>
                            <div className="newsletter-form">
                                <div className="form-field">
                                    <input name="name" type="text" placeholder="First Name"/>
                                </div>
                                <div className="form-field">
                                    <input name="email" type="text" placeholder="Email"/>
                                </div>
                                <div className="form-button">
                                    <button className="button">Send me Strategies now</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            By submitting this form, you are agreeing to receive Internet Alchemy, Inc. messages from
                            Jeff Walker.
                        </div>
                    </div>
                </div>
            </div>
            <div className="meet-jeff-container">
                <h4>I’ve taught thousands of students (who operate in hundreds of niches) how to launch their
                    businesses from scratch, and they’ve generated over $1 billion in sales (and that number grows
                    every day).</h4>
                <Row>
                    <Col xs={12} lg={6}>
                        <img className="jeff-img" src="https://jeffwalker.com/wp-content/uploads/2018/06/jeff-1.png" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="meet-jeff">
                            <div className="subtitle">
                                Meet
                            </div>
                            <div className="title">
                                Jeff <span>Walker</span>
                            </div>
                            <div className="first-text">
                                I’m Jeff Walker, the creator of the Product Launch Formula… it's a system that’s been
                                used
                                by
                                thousands of entrepreneurs in hundreds of different niches and markets to create hugely
                                successful product launches.
                            </div>
                            <div className="second-text">
                                The impact has been crazy huge… my students and clients have now done well over $1
                                billion
                                in
                                product launches. Along the way, I’ve coached or helped all kinds of experts such as
                                Tony
                                Robbins, Brendon Burchard, Dan Kennedy, Bill Glazer, Rich Schefren, Frank Kern, Dean
                                Graziosi,
                                Yanik Silver, Greg Clement and dozens more “gurus” — but I get most excited about all of
                                the
                                “regular folks” that I’ve helped quit their jobs and grow serious businesses.
                            </div>
                            <div className="second-text">
                                It all started in the Internet Dark Ages of 1996 in my baby’s changing room…
                            </div>
                            <div className="button-container">
                                <button className="button-inverse">Read My Story</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Row>
    );
};

export default Home;
