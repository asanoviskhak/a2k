import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-dark-slate-blue padding-ten-lr xl-padding-two-lr xs-no-padding-lr wow animate__fadeIn">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center margin-six-bottom">
            <h4 className="alt-font text-white font-weight-500">
              Как это работает?
            </h4>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-xl-4 row-cols-sm-2 justify-content-center">
          <div className="col lg-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
            {/* start feature box item */}
            <div className="feature-box text-left feature-box-light-hover border-radius-5px bg-gradient-turquoise-green-yellowish overflow-hidden padding-3-half-rem-all">
              <div className="feature-box-icon">
                <i className="line-icon-Binocular icon-large text-extra-dark-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
              </div>
              <div className="feature-box-content">
                <span className="alt-font font-weight-500 margin-10px-bottom d-block text-white">
                  Выбери университет
                </span>
                <p className="text-extra-dark-gray opacity-7">
                    Назначь встречу с нашим консультантом и получи получи помощь с документами для поступления на учебу за границей.
                </p>
                <a href="#" className="btn btn-medium btn-link text-white">
                  Подробнее
                </a>
              </div>
              <div className="feature-box-overlay bg-white" />
            </div>
            {/* end feature box item */}
          </div>
          <div
            className="col lg-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
            data-wow-delay="0.2s"
          >
            {/* start feature box item */}
            <div className="feature-box text-left feature-box-light-hover border-radius-5px bg-gradient-turquoise-green-yellowish overflow-hidden padding-3-half-rem-all">
              <div className="feature-box-icon">
                <i className="line-icon-Identification-Badge icon-large text-extra-dark-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
              </div>
              <div className="feature-box-content">
                <span className="alt-font font-weight-500 margin-10px-bottom d-block text-white">
                Получи визу
                </span>
                <p className="text-extra-dark-gray opacity-7">
                Получи помощь у визового специалиста, который поможет через весь процесс, включая: подачу заявления, встречу и собеседование.
                </p>
                <a href="#" className="btn btn-medium btn-link text-white">
                  Подробнее
                </a>
              </div>
              <div className="feature-box-overlay bg-white" />
            </div>
            {/* end feature box item */}
          </div>
          <div
            className="col xs-margin-15px-bottom wow animate__fadeIn"
            data-wow-delay="0.4s"
          >
            {/* start feature box item */}
            <div className="feature-box text-left feature-box-light-hover border-radius-5px bg-gradient-turquoise-green-yellowish overflow-hidden padding-3-half-rem-all">
              <div className="feature-box-icon">
                <i className="line-icon-Student-Hat2 icon-large text-extra-dark-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
              </div>
              <div className="feature-box-content">
                <span className="alt-font font-weight-500 margin-10px-bottom d-block text-white">
                  Обучайся за рубежом
                </span>
                <p className="text-extra-dark-gray opacity-7">
                Забронируй самолет, путешествуй и следуй своим мечтам за границей, и получай поддержку от нас до окончания учебы!
                </p>
                <a href="#" className="btn btn-medium btn-link text-white">
                  Подробнее
                </a>
              </div>
              <div className="feature-box-overlay bg-white" />
            </div>
            {/* end feature box item */}
          </div>
        </div>
      </div>
    </section>
  );
}
