import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Home.scss';
import Button from "../Common/Button/Button";
import Card from '../Common/Card/Card';

const fullWH = {
    width: '100%',
    height: '100%',
};

const BuildBusiness = () => (
    <div className="home">
        <div className="build-business"/>
        <div className="build-business-container">
            <img className="book-img"
                 src="https://jeffwalker.com/wp-content/uploads/2018/08/16_rules_white_tilted.png"/>
            <div className="business-form">
                <div>
                    Get the <span style={{fontWeight: 'bold'}}>behind-the-scenes strategies and secrets </span> used by
                    the
                    world’s most successful online entrepreneurs. These are powerful tactics that I’ve used to launch
                    and grow my
                    own online business… and they can work for you, too.
                </div>
                <div>
                    <div className="newsletter-form">
                        <Row style={{width: "100%"}}>
                            <Col md={4}>
                                <div className="form-field">
                                    <input name="name" type="text" placeholder="First Name"/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="form-field">
                                    <input name="email" type="text" placeholder="Email"/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="form-button">
                                    <button className="button">Send me Strategies now</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div>
                    By submitting this form, you are agreeing to receive Internet Alchemy, Inc. messages from Jeff
                    Walker.
                </div>
            </div>
        </div>
    </div>
);

const MeetJeff = () => (
    <div className="meet-jeff-container">
        <h4>
            I’ve taught thousands of students (who operate in hundreds of niches) how to launch their businesses from
            scratch,
            and they’ve generated over $1 billion in sales (and that number grows every day).
        </h4>
        <Row>
            <Col xs={12} md={6}>
                <img className="jeff-img" src="https://jeffwalker.com/wp-content/uploads/2018/06/jeff-1.png"/>
            </Col>
            <Col xs={12} md={6}>
                <div className="meet-jeff">
                    <div className="subtitle">Meet</div>
                    <div className="title">
                        Jeff <span>Walker</span>
                    </div>
                    <div className="first-text">
                        I’m Jeff Walker, the creator of the Product Launch Formula… it's a system that’s been used by
                        thousands of
                        entrepreneurs in hundreds of different niches and markets to create hugely successful product
                        launches.
                    </div>
                    <div className="second-text">
                        The impact has been crazy huge… my students and clients have now done well over $1 billion in
                        product
                        launches. Along the way, I’ve coached or helped all kinds of experts such as Tony Robbins,
                        Brendon Burchard,
                        Dan Kennedy, Bill Glazer, Rich Schefren, Frank Kern, Dean Graziosi, Yanik Silver, Greg Clement
                        and dozens
                        more “gurus” — but I get most excited about all of the “regular folks” that I’ve helped quit
                        their jobs and
                        grow serious businesses.
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
);

const videos = [
    {title: 'Should you do a live event'},
    {title: 'Should you do a live event'},
    {title: 'Should you do a live event'},
    {title: 'Should you do a live event'},
];

const TopVideos = () => (
    <div className="top-videos">
        <h3>Free Ideas, Inspiration, and Strategies for Building Your Business</h3>
        <p>
            Every week I put out a video about something I’ve learned in my two decades in business. And sometimes I
            have
            pretty cool people stop by to share their thoughts on building a successful business. Just click any of the
            links
            below for my best stuff on launching and growing a business you love.
        </p>
        <Row>
            {videos.map(video => (
                <Col md={4} sm={6} xs={12}>
                    <Card className="video-card" title={video.title}/>
                </Col>
            ))}
        </Row>
    </div>
);

const programs = [
    {
        upperImg: 'https://jeffwalker.com/wp-content/uploads/2018/06/prodimg1.png',
        bottomImg: 'https://jeffwalker.com/wp-content/uploads/2018/04/bookbuy2.png',
        desc:
            '“Launch” is the book that will build your online business—fast. Whether you’ve already got a business or you’re itching to start one, this is a recipe for getting more traction. Launch is a #1 New York Times Best Seller and has helped hundreds of people grow their online businesses. Click below to learn how to get a copy:',
    }, {
        upperImg: 'https://jeffwalker.com/wp-content/uploads/2018/06/prodimg1.png',
        bottomImg: 'https://jeffwalker.com/wp-content/uploads/2018/04/bookbuy2.png',
        desc:
            '“Launch” is the book that will build your online business—fast. Whether you’ve already got a business or you’re itching to start one, this is a recipe for getting more traction. Launch is a #1 New York Times Best Seller and has helped hundreds of people grow their online businesses. Click below to learn how to get a copy:',
    }, {
        upperImg: 'https://jeffwalker.com/wp-content/uploads/2018/06/prodimg1.png',
        bottomImg: 'https://jeffwalker.com/wp-content/uploads/2018/04/bookbuy2.png',
        desc:
            '“Launch” is the book that will build your online business—fast. Whether you’ve already got a business or you’re itching to start one, this is a recipe for getting more traction. Launch is a #1 New York Times Best Seller and has helped hundreds of people grow their online businesses. Click below to learn how to get a copy:',
    },
];

const SingleProgram = ({upperImg, bottomImg, desc}) => (
    <div className={'single-program'}>
        <img className="upper-img" src={upperImg}/>
        <img className="bottom-img" src={bottomImg}/>
        <div className="desc">{desc}</div>
        <div style={{width: 150, fontSize: 12, margin: "0 auto", marginBottom: 10}}>
            <Button border={false} inverse> Learn More </Button>
        </div>
    </div>
);

const BooksPrograms = () => {
    return (
        <div className="books-programs">
            <div className="books-container"/>
            <div>
                <h1> Books, Programs, Events</h1>
                <div className="programs-container">
                    {programs.map(p => <SingleProgram upperImg={p.upperImg} bottomImg={p.bottomImg} desc={p.desc}/>)}
                </div>
            </div>
            <div style={{margin: "0 auto", width: 200, fontSize: 12, marginBottom: 75}}>
                <Button inverse> See All Programs </Button>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <Row style={{...fullWH, marginLeft: 0, marginRight: 0, height: "auto"}}>
            <div className="bg-image"/>
            <BuildBusiness/>
            <MeetJeff/>
            <TopVideos/>
            <BooksPrograms/>
        </Row>
    );
};

export default Home;
