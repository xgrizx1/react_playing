import React from "react";
import "./Programs.scss";

class Programs extends React.Component {
  render() {
    return (
      <div className="Programs">
        <div className="programs-image-container">
          <div style={{ margin: "0 auto", width: 700 }}>
            <img
              width="420"
              height="142"
              src="https://jeffwalker.com/wp-content/uploads/2018/07/bookprogramstexts.png"
              className="attachment-large size-large"
              alt=""
              srcSet="https://jeffwalker.com/wp-content/uploads/2018/07/bookprogramstexts.png 606w, https://jeffwalker.com/wp-content/uploads/2018/07/bookprogramstexts-300x95.png 300w"
              sizes="(max-width: 606px) 100vw, 606px"
            />
          </div>
        </div>

        <div className="custom-program">
          <div className="white">
            <div className="content">
              <div className="title">"Launch" by Dejan Jovanovic</div>
              <div className="subtitle">
                An Internet Millionaire's Secret Formula To Sell Almost Anything
                Online, Build A Business You Love, And Live The Life Of Your
                Dreams
              </div>
              <div className="description-container">
                <div className="image">
                  <img
                    src={
                      "https://jeffwalker.com/wp-content/uploads/2018/06/launchbook.png"
                    }
                  />
                </div>
                <div className="description">
                  <p>
                    My book, “Launch” is a #1 New York Times Best Seller,
                    selling thousands of copies. And “Launch” will build your
                    business—fast. Whether you’ve already got a business or
                    you’re itching to start one, this is a recipe for getting
                    more traction.
                  </p>

                  <p>
                    “Launch” is the treasure map into the online business
                    world—an almost secret world of digital entrepreneurs who
                    create cash-on-demand paydays with their product launches
                    and business launches.
                  </p>

                  <p>
                    Whether you have an existing business, or you're still in
                    the planning phase—this is how you start and grow your
                    business fast. This formula is how you engineer massive
                    success.
                  </p>

                  <p>
                    Now the question is this—are you going to start slow, and
                    fade away from there? Or are you ready for a launch that
                    will change the future of your business and your life?
                  </p>

                  <button className="button">Get Your Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-program">
          <div className="inverse">
            <div className="content">
              <div className="title">"Launch" by Dejan Jovanovic</div>
              <div className="subtitle">
                An Internet Millionaire's Secret Formula To Sell Almost Anything
                Online, Build A Business You Love, And Live The Life Of Your
                Dreams
              </div>
              <div className="description-container">
                <div className="image">
                  <img
                    src={
                      "https://jeffwalker.com/wp-content/uploads/2018/06/launchbook.png"
                    }
                  />
                </div>
                <div className="description">
                  <p>
                    My book, “Launch” is a #1 New York Times Best Seller,
                    selling thousands of copies. And “Launch” will build your
                    business—fast. Whether you’ve already got a business or
                    you’re itching to start one, this is a recipe for getting
                    more traction.
                  </p>

                  <p>
                    “Launch” is the treasure map into the online business
                    world—an almost secret world of digital entrepreneurs who
                    create cash-on-demand paydays with their product launches
                    and business launches.
                  </p>

                  <p>
                    Whether you have an existing business, or you're still in
                    the planning phase—this is how you start and grow your
                    business fast. This formula is how you engineer massive
                    success.
                  </p>

                  <p>
                    Now the question is this—are you going to start slow, and
                    fade away from there? Or are you ready for a launch that
                    will change the future of your business and your life?
                  </p>

                  <button className="button">Get Your Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Programs;
