import React from 'react'
import HowItWorks from './HowItWorks';
import WhoWe from './WhoWe'
import Team from './Team'
import Services from './Services'
import ContactUs from './ContactUs';
import Footer from './Footer';
export default function Body() {
    return (
      <>
      <div className="main-content">
          <section id="main"
            className="p-0 cover-background overlap-height"
            style={{
              backgroundImage: 'url("images/back/main-bg.jpg")',
            }}
          >
            <div className="opacity-very-light bg-dark-slate-blue" />
            <div className="container position-relative">
              <div className="row full-screen md-h-800px sm-h-500px">
                <div className="col-12 col-xl-6 col-lg-6 col-md-7 col-sm-10 d-flex flex-column justify-content-center">
                  <h1 className="alt-font text-white line-height-65px font-weight-500 letter-spacing-minus-1px margin-65px-bottom sm-line-height-50px sm-margin-25px-bottom">
                    Хочешь обучаться в
                    <span className="text-gradient-turquoise-green-yellowish font-weight-600"> Южной Корее?</span>
                  </h1>
                  <div className="alt-font text-medium font-weight-500 text-uppercase letter-spacing-2px media">
                    <span className="w-40px h-1px bg-tussock align-self-center margin-25px-right" />
                    <span className="text-gradient-turquoise-green-yellowish">
                      Получи бесплатную консультацию!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end ml-auto w-750px position-absolute right-0px bottom-0px z-index-1 sm-position-relative sm-w-100">
              <div className="row align-items-center justify-content-end mx-0 w-100">
                <div className="col-9 col-sm-9 align-items-center d-flex bg-gradient-turquoise-green-yellowish h-100 padding-3-rem-tb padding-5-rem-lr xs-padding-3-rem-lr">
                  <h5 className="alt-font text-white font-weight-300 m-0">
                    Забронируй себе место для{" "}
                    <span className="font-weight-600">
                      онлайн встреч
                    </span>
                  </h5>
                </div>
                <div className="col-3 p-0 h-100 d-xl-inline-block">
                  <a
                    href="#contact-us"
                    className="text-center align-items-center d-flex justify-content-center bg-seashell h-100 inner-link"
                  >
                    <i className="line-icon-Arrow-OutRight icon-extra-large text-gradient-turquoise-green-yellowish" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <HowItWorks/>
          <Services/>
          <WhoWe/>
          <Team/>
          <ContactUs/>
          </div>
          <Footer/>
          
          <a className="scroll-top-arrow" href="javascript:void(0);">
            <i className="feather icon-feather-arrow-up" />
          </a>
        
      </>
    );
}
