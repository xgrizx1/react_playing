import React, {Component} from 'react';
import './App.scss';
import MenuItem from './Common/MenuItem';
import {Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const arr = [
    {
        name: 'Home', onClick: () => {
        }
    },
    {
        name: 'About', onClick: () => {
        }
    },
    {
        name: 'Books', onClick: () => {
        }
    },
    {
        name: 'Videos', onClick: () => {
        }
    },
    {
        name: 'Programs', onClick: () => {
        }
    },
    {
        name: 'Blogs', onClick: () => {
        }
    },
    {
        name: 'Podcasts', onClick: () => {
        }
    },
    {
        name: 'Contact', onClick: () => {
        }
    },
];

const texts = [
    {text: "What it's really about", link: "/sdads"},
    {text: "What it's really about", link: "/sdads"},
    {text: "What it's really about", link: "/sdads"},
    {text: "What it's really about", link: "/sdads"},
    {text: "What it's really about", link: "/sdads"},
];


const Footer = () => (
    <div className="Footer">
        <div className="Footer-container">
            <div className="Footer-text">{arr.map(i => <MenuItem styles={{fontSize: 12}} name={i.name} onClick={i.onClick()}/>)}</div>
            <Grid>
                <Row style={{color: '#fff'}}>
                    <Col md={4} sm={6}>
                        <div className="Footer-heading"> JEFF's POSTS</div>
                        <div style={{paddingTop: 10}}>
                            {texts.map(line => <Link to="/" className="footer-link">{line.text}</Link>)}
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="Footer-heading"> LATEST TWEET </div>
                    </Col>
                    <Col md={4} sm={6} style={{textAlign: 'right'}}>
                        <div className="Footer-heading" > CONNECT WITH ME </div>
                        <a href="#" className="fa fafa fa-facebook" />
                        <a href="#" className="fa fafa fa-twitter" />
                    </Col>
                </Row>
            </Grid>
        </div>
    </div>
);
export default Footer;
