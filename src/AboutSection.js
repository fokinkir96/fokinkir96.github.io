import React from 'react';
import me from "./assets/img/me.jpg";

function AboutSection() {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        {/*<p>*/}
                        {/*    Привет! Меня зовут Кирилл, мне 28 лет, и у меня за плечами 10 лет опыта в*/}
                        {/*    веб-разработке. За эти годы я овладел множеством технологий, таких как PHP, Python,*/}
                        {/*    JavaScript, HTML и CSS. Моя работа включала разработку и поддержку сайтов на популярных*/}
                        {/*    фреймворках и платформах, включая WordPress, Joomla, Bitrix и Laravel.*/}
                        {/*</p>*/}
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src={me} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3 style={{"margin-bottom": "1.5rem"}}>DevOps engineer &amp; Web Developer.</h3>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong><span>28</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href={"fokinkir96.github.io"} title=""><span>fokinkir96.github.io</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong>
                                            <span>Москва</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                                            <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Привет! Меня зовут Кирилл, мне 28 лет, и у меня за плечами 10 лет опыта в
                                веб-разработке. За эти годы я овладел множеством технологий, таких как PHP, Python,
                                JavaScript, HTML и CSS. Моя работа включала разработку и поддержку сайтов на популярных
                                фреймворках и платформах, включая WordPress, Joomla, Bitrix и Laravel.
                            </p>
                            <p>
                                    Кроме того, я занимаюсь DevOps, что включает настройку CI/CD пайплайнов,
                                    автоматизацию процессов развертывания и поддержку инфраструктуры. Мой опыт в этой
                                    области помогает обеспечивать непрерывную интеграцию и доставку, что значительно
                                    ускоряет разработку и повышает качество конечного продукта.
                            </p>
                            <p>
                                    Моя карьера в веб-разработке началась с интереса к созданию сайтов, и со временем
                                    это превратилось в мою профессиональную страсть. Я люблю создавать удобные и
                                    функциональные веб-решения, которые помогают бизнесам расти и развиваться в цифровом
                                    пространстве.
                            </p>
                            <p>
                                    Помимо работы, я активно занимаюсь конным спортом, катаюсь на сноуборде и езжу на
                                    мотоцикле. Эти хобби помогают мне поддерживать баланс между профессиональной
                                    деятельностью и личной жизнью, а также вдохновляют на новые идеи и проекты.
                            </p>
                            <p>
                                    Я всегда открыт для новых возможностей и сотрудничества. Если у вас есть интересный
                                    проект или идея, которую вы хотели бы обсудить, не стесняйтесь связаться со мной!
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutSection;
