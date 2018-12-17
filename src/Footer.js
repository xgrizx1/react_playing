import React, {Component} from 'react';
import './App.scss';
import MenuItem from './Common/MenuItem';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const arr = [
    {
        name: '30 Day Challenge',
        onClick: () => {
        },
    },
    {
        name: 'Book Launches',
        onClick: () => {
        },
    },
    {name: null},
    {
        name: 'Internet Marketing',
        onClick: () => {
        },
    },
    {
        name: 'Mindset',
        onClick: () => {
        },
    },
    {name: null},

    {
        name: 'Motivation',
        onClick: () => {
        },
    },
    {
        name: 'Blogs',
        onClick: () => {
        },
    },
    {name: null},

    {
        name: 'Product Launches',
        onClick: () => {
        },
    },
    {
        name: 'Reader Questions',
        onClick: () => {
        },
    },
    {name: null},

    {
        name: 'Strategy',
        onClick: () => {
        },
    },
    {
        name: 'Website Traffic',
        onClick: () => {
        },
    },
    {name: null},
];

const texts = [
    {text: "What it's really about", link: '/sdads'},
    {text: "What it's really about", link: '/sdads'},
    {text: "What it's really about", link: '/sdads'},
    {text: "What it's really about", link: '/sdads'},
    {text: "What it's really about", link: '/sdads'},
];

const Footer = () => (
    <div className="Footer">
        <div className="Footer-image"/>
        <div className="Footer-container">
            <div className="footer-form">
                <Row style={{alignItems: "center"}}>
                    <Col sm={3} md={2}>
                        <img style={{width: '100%'}}
                             src="https://jeffwalker.com/wp-content/uploads/2018/08/16_rules_white.png"/>
                    </Col>
                    <Col sm={9} md={10}>
                        <div className="footer-form-container">
                            <div className="footer-form-desc">
                                Get the <span>behind-the-scenes strategies and secrets</span> used by the world’s most
                                successful online
                                entrepreneurs. These are powerful tactics that I’ve used to launch and grow my own
                                online business… and
                                they can work for you, too.
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="form-field">
                                        <input name="name" type="text" placeholder="Name"/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-field">
                                        <input name="name" type="text" placeholder="Email"/>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-button">
                                        <button className="button">Send me Strategies now</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="footer-social">
                <div className="footer-link-container">
                    {arr.map((title, i) => (
                        (title.name === null) ?
                            <br/>
                            :
                            <div className="footer-link">{title.name}</div>
                    ))}
                </div>
                <div className="footer-social-container">
                    <div className="footer-social-circle">
                        <div className="social-circle"/>
                        <div className="social-text">
                            Connect with me and plf tribe
                        </div>
                    </div>
                    <div className="footer-social-circle">
                        <div className="social-circle"/>
                        <div className="social-text">
                            Connect with me and plf tribe
                        </div>
                    </div>
                    <div className="footer-social-circle">
                        <div className="social-circle"/>
                        <div className="social-text">
                            Connect with me and plf tribe
                        </div>
                    </div>
                    <div className="footer-social-circle">
                        <div className="social-circle"/>
                        <div className="social-text">
                            Connect with me and plf tribe
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-last"/>
    </div>
);
export default Footer;
