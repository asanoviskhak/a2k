import React from 'react'

export default function WhoWe() {
    return (
      <section id="who-are-we" className="big-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-11 col-xl-5 col-md-6 sm-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.1s"
            >
              <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0">
                Даём бесплатные консультации по обучению в Корее
              </h4>
            </div>
            <div
              className="col-11 col-xl-5 offset-xl-1 col-md-6 wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <p className="text-large line-height-38px">
                Мы - стартап в сфере образования, с офисом в Южной Корее, который основан 
                командой с дальновидными взглядами с миссией помочь русскоязычным
                студентам в получении образования за границей и реализовать свой потенциал.
              </p>
              <a
                href="#"
                className="btn btn-link btn-extra-large text-extra-dark-gray"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
