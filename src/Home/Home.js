import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.scss';

const fullWH = {
  width: '100%',
  height: '100%',
};

const Home = () => {
  return (
    <Row style={{ ...fullWH, marginLeft: 0, marginRight: 0 }}>
      <div className="bg-image" style={{ ...fullWH, height: 'calc(100% - 77px)' }}>
        <div className="main-container">
          <Col sm={5} xs={12}>
            <img src="https://jeffwalker.com/wp-content/uploads/2010/05/JEFF_Website_MainImages_Home_Jeff-1.png" />
          </Col>
          <Col sm={7} xs={12}>
            <h2 className="featured-section">Build A Business You Love</h2>
            <h2 style={{marginLeft: 50}} className="featured-section">Live the life of your dreams</h2>
            <div className="special-feature-box">
              <div className="topper">
                <h2>
                  Product <span>Launch</span>
                </h2>
                <h3>
                  <span>Formula</span>
                </h3>
              </div>
              <div className="lower">
                <p style={{textAlign: 'left', padding: 20}}>
                  Product Launch Formula is a proven, step-by-step process that shows you exactly how to launch a
                  product in precise detail. It shows you exactly what to do every step of the way, right down to which
                  blog post to release when, and what to say in every email.
                </p>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default Home;
