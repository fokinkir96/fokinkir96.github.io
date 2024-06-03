import React from 'react';

function HeroSection() {
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Фокин Кирилл</h1>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, DevOps engineer"></span></p>
                    <div className="social-links">
                        <a href="https://t.me/fokinkir96" className="telegram"><i className="bx bxl-telegram">  </i></a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
