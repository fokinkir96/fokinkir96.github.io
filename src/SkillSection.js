import React from 'react';

function SkillSection() {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">99%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="99"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">99%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="99"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Docker <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CI/CD pipeline`s <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">PHP <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Python <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">WordPress/CMS <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Django, Flask, Laravel and other`s <i
                                    className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">ML <i
                                    className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default SkillSection;
