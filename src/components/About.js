import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About</span>
                                            <h2 className="colorlib-heading">About Me</h2>
                                            <p>Hi! I'm Ariel, a software engineer who is all about efficiency. Having previous experience in sales and customer service, I know what it takes to keep customers satisfied, and look to combine that experience with my technical skills to help businesses become more successful.</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="heading-meta"></div>
                        </div>
                    </div>
                </section> */}
            </div>
        )
    }
}