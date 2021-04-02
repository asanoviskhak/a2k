import React from 'react'

export default function Team() {
    return (
        <section className="pb-0 bg-gradient-white-light-gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-7 col-sm-8 text-center margin-6-rem-bottom md-margin-3-rem-bottom wow animate__fadeIn">
                  <div className="alt-font title-large text-gradient-turquoise-green-yellowish font-weight-700 text-uppercase letter-spacing-minus-7px xl-letter-spacing-minus-4px">
                    Кто мы?
                  </div>
                  {/* <span className="d-inline-block alt-font text-extra-dark-gray text-large text-uppercase font-weight-500 letter-spacing-1px margin-20px-bottom margin-10px-top">
                    was more accepted 40 years ago
                  </span> */}
                </div>
              </div>
            </div>
            <div className="container-fluid padding-eight-lr lg-padding-15px-lr">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
               
                {/* start team member */}
                <div
                  className="col team-style-01 text-center md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <figure>
                    <div className="team-member-image">
                      <img alt="About team 17" src="images/about-team-16.png" />
                      <div className="team-overlay bg-transparent-gradient-tussock-greenish-slate" />
                    </div>
                    <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                      <span className="team-title d-block alt-font text-white">
                        Досбол Касымов
                      </span>
                      <span className="team-sub-title text-small d-block text-white-transparent text-uppercase">
                        Консультант-Специалист & ОСНОВАТЕЛЬ
                      </span>
                      <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                {/* end team member */}
                {/* start team member */}
                <div
                  className="col team-style-01 text-center xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.6s"
                >
                  <figure>
                    <div className="team-member-image">
                      <img alt="About team 18" src="images/about-team-16.png" />
                      <div className="team-overlay bg-transparent-gradient-tussock-greenish-slate" />
                    </div>
                    <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                      <span className="team-title d-block alt-font text-white">
                        Элеонора Кырбиева
                      </span>
                      <span className="team-sub-title text-small d-block text-white-transparent text-uppercase">
                        SMM Специалист & CО-ОСНОВАТЕЛЬ
                      </span>
                      <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                {/* end team member */}
                {/* start team member */}
                <div
                  className="col team-style-01 text-center wow animate__fadeIn"
                  data-wow-delay="0.8s"
                >
                  <figure>
                    <div className="team-member-image">
                      <img alt="About team 19" src="images/about-team-16.png" />
                      <div className="team-overlay bg-transparent-gradient-tussock-greenish-slate" />
                    </div>
                    <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                      <span className="team-title d-block alt-font text-white">
                        Исхак Асанов
                      </span>
                      <span className="team-sub-title text-small d-block text-white-transparent text-uppercase">
                        Разработчик & CО-ОСНОВАТЕЛЬ
                      </span>
                      <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                {/* end team member */}
              </div>
            </div>
          </section>
    )
}
