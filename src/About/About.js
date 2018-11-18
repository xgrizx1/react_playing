import React from "react";
import "./About.scss";
import Button from "../Common/Button/Button";

const firstWhiteComponent = {
    title: "And that’s when I knew I was onto something…",
    paragraphs: [
        "I kept refining my “launch” process, and the results kept getting better… until my formula was almost guaranteed.",
        "I started sharing what I learned about launching new products and businesses with some other entrepreneurs I knew. And their results were incredible.",
        "Pretty soon, I was getting asked to speak on stage and teach people about how they can use my formula to launch their own products and businesses. The amazing results continued to pour in – and that’s when I decided to turn it into a step-by-step program that anyone could follow.",
    ],
    imageLink: "https://jeffwalker.com/wp-content/uploads/2018/07/aboutimg2.jpg"
};

const secondWhiteComponent = {
    title: "When I started, I was a stay-at-home dad taking care of two small children.",
    paragraphs: [
        "It had been a few years since I quit my corporate job. I hadn’t made any money since then, and that felt terrible. I knew I needed to make a change.",
        "I launched my “business” from the babies’ changing room – and it started with a free email newsletter sent to 19 people. That was in the Internet Dark Ages of 1996."
    ],
    imageLink: "https://jeffwalker.com/wp-content/uploads/2018/07/aboutimg1.png",
    imageFirst: true
};

const WhiteComponent = ({imageFirst = false, imageLink = "", paragraphs = [], title = ""}) => (
    <div className="about-getting-started-container" style={{paddingTop: 50}}>
        <div className="title">
            {title}
        </div>
        <div className="about-history">
            {imageFirst && <img src={imageLink}/>}
            <div>
                {paragraphs.map(
                    paragraph => <p>{paragraph}</p>
                )}
            </div>
            {!imageFirst && <img src={imageLink}/>}
        </div>
    </div>
);

class About extends React.Component {
    render() {
        const imgStyle = {margin: "auto", maxWidth: 1000, display: "block"};
        return (
            <div className="about-container">
                <div className="about-upper-image">
                    <div className="about-upper-image-text">
                        Hi, I’m Jeff Walker.
                    </div>
                </div>

                <div className="about-first-paragraph">
                    <p className="paragraph-bold">
                        I’m the creator of the Product Launch Formula and author of The #1 New York Times Bestseller
                        “Launch: An Internet Millionaire’s Secret Formula To Sell Almost Anything Online, Build A
                        Business You Love, And Live The Life Of Your Dreams.”
                    </p>

                    <p>
                        When I first started publishing online way back in 1996, I had no idea how to sell my products
                        or build an online business. Then (almost by accident) I created what’s become the Product
                        Launch Formula. That formula has become the gold standard for launching products, services, and
                        even entire brands with huge momentum and great success. It’s literally transformed the way
                        stuff is sold online. And it’s also helped me become one of the top entrepreneurial and
                        marketing trainers in the world.
                    </p>

                    <p>
                        Here’s how it happened…
                    </p>
                </div>

                <WhiteComponent {...firstWhiteComponent}/>

                <div className="about-money-first-time">
                    <div className="about-money-first-time-image"/>
                    <div className="text-content">
                        <div className="title">
                            I’ll never forget how nervous I was the very first time I made an offer to my list.
                        </div>
                        <p>
                            Back then, my business was a simple newsletter about the stock market. I just kept sending
                            more and more free content – and people loved it.
                        </p>
                        <p>
                            The problem was that I wasn’t making any money.
                        </p>

                        <p>
                            I knew I needed to sell something, but I kept delaying making that offer because I wasn’t a
                            salesman – and I didn’t know how to ask for the offer.
                        </p>

                        <p>
                            So I kept delivering more value… and when I finally made the offer, people were really
                            excited
                            to buy.
                        </p>
                    </div>
                </div>

                <WhiteComponent {...secondWhiteComponent}/>

                <div className="about-dark-component">
                    <div className="about-dark-component-image"/>
                    <div className="about-dark-container">
                        <div className="title-dark">
                            That was the start on an incredible wave of entrepreneurs with tiny, home-based businesses
                            doing
                            launches that sold tens of thousands, hundreds of thousands, and even millions of dollars in
                            sales with their launches.
                        </div>
                        <p className="white">
                            Back then, almost no one in the online entrepreneurial world talked about doing “product
                            launches”… and the the idea of a “million dollar launch” seemed ludicrous. But now, in the
                            post-Product Launch Formula world, million dollar (and multi-million dollar) launches hardly
                            raise an eyebrow. I would never say they’re routine, but they happen nearly every month.
                        </p>
                    </div>
                </div>

                <div className="common-container">
                    <p>And of course, my techniques are not just for the big gurus who have well established
                        businesses.</p>

                    <p>I’ve taught thousands of students (who operate in hundreds of niches) how to launch their
                        businesses from scratch, and they've generated more than $1 billion in sales (and that number
                        grows every day). </p>
                </div>

                <img src="https://jeffwalker.com/wp-content/uploads/2018/07/aboutimg3.jpg"
                     style={imgStyle}/>

                <div className="common-container">
                    <div className="title">
                        And of course, there are a lot of things that have changed in my life since that very first
                        launch.
                    </div>
                    <p>Today, live in Durango, Colorado with my wife Mary. I’ve got an amazing (and growing) team that
                        helps me teach entrepreneurs from around the world how to launch the business of their dreams.
                        I’m a New York Times #1 Bestselling author. I put on live events that regularly have 1,000+
                        attendees from around the world.</p>

                    <p>And I still get to spend a lot of time outdoors – and I have enough time to work on my passions.
                        Even though my kids are out of the house, I get to go on lots of adventures with them
                        (especially on skis and mountain bikes). </p>

                    <p>All of this was possible because I decided it was time to take control of my life and launch an
                        online business.</p>

                    <p>And now, it’s my goal to help people around the world create the business and the lifestyle of
                        their dreams.</p>
                </div>

                <img src="https://jeffwalker.com/wp-content/uploads/2018/07/aboutimg4.png" style={imgStyle}/>

                <div className="about-dark-component">
                    <div className="about-dark-component-image"/>
                    <div className="about-dark-container">
                        <div className="title-dark">
                            It could happen for you, too.
                        </div>
                        <p className="white">
                            I’m no different from you. I didn’t have any advantages when I first started. I like to say
                            that everyone’s business starts at zero.
                        </p>
                        <p className="white">
                            But I made it a point to create the kind of business that gave me the freedom I desired. And
                            I’ve helped a lot of people around the world achieve this same goal
                        </p>
                        <p className="white">
                            So, if you’d like to learn how you can launch your own product, service, book or business
                            with maximum success, then sign up for my free Launch Workshop below.
                        </p>

                        <p className="white">
                            I’ve had people create six figure launches just from watching these free videos:
                        </p>

                        <div style={{maxWidth: "500px", margin: "0 auto"}}>
                            <Button> Join The Free Launcshop </Button>
                        </div>
                    </div>
                </div>


                <div className="about-final-container">
                    <div className="about-final-image"/>
                    <div className="title-big">
                        <span style={{color: "black"}}>About </span>
                        JeffWalker.com
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xs-12"/>
                        <div className="col-md-6">
                            <div className="final-paragraph">
                                <p>
                                    This site – JeffWalker.com – is basically the place where I share what I’ve seen,
                                    what I’ve
                                    done… and what I’ve learned throughout the last 20+ years in business.
                                </p>
                                <p>
                                    I started back in 1996 with nothing. I had $0 to start my business, and I had no
                                    experience
                                    ever starting a business. It’s been a crazy ride… and I wouldn’t trade it for
                                    anything.
                                </p>
                                <p>
                                    But as much as this site is about me, I like to think it’s more about you. My goal
                                    is to
                                    help you grow your own business, launch your products and reach your own dreams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;