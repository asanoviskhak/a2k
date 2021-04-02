import React from 'react'

export default function ContactUs() {
    return (
      <section id="contact-us" className="big-section bg-gradient-turquoise-green-yellowish wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-12 col-lg-5 col-md-8 md-margin-50px-bottom">
              <div
                className="feature-box feature-box-left-icon-middle padding-4-rem-all bg-light-gray overflow-hidden background-position-top background-no-repeat lg-padding-3-rem-lr md-padding-5-rem-all xs-padding-3-half-rem-all"
                style={{ backgroundImage: 'url("images/quotes-01.png")' }}
              >
                <div className="feature-box-icon margin-25px-right xs-margin-15px-right">
                  <img
                    className="border-radius-100 w-80px xs-w-50px"
                    src="images/user-01.jpg"
                    alt
                  />
                </div>
                <div className="feature-box-content">
                  <div className="text-large text-extra-dark-gray alt-font font-weight-500 w-90">
                  Комфортнее поговорить с нами по телефону?
                  </div>
                </div>
                <p className="margin-30px-top margin-15px-bottom w-80 lg-w-100">
                    Запланируй 15-минутный звонок. Мы обсудим и ответим на твои вопросы.
                </p>
                <a
                  href="#"
                  className="text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom text-uppercase"
                >
                  Выбрать время
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 col-md-8">
              <h4 className="alt-font text-black font-weight-600">
                Свяжись с нами сейчас
              </h4>
              <form
                action="https://lithohtml.themezaa.com/email-templates/contact-form.php"
                method="post"
                className="alt-font text-extra-dark-gray"
              >
                <input
                  className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
                  type="text"
                  name="name"
                  placeholder="Полное имя"
                />
                <input
                  className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
                  type="email"
                  name="email"
                  placeholder="Электропочта"
                />
                <input
                  className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px"
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                />
                <textarea
                  className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-35px-bottom border-radius-0px"
                  name="comment"
                  rows={5}
                  placeholder="О чем хочешь поговорить?"
                  defaultValue={""}
                />
                <div
                  className="margin-35px-bottom"
                />
                <button
                  className="btn btn-medium btn-dark-gray mb-0 submit"
                  type="submit"
                >
                  Отправить
                </button>
                <div className="form-results d-none" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
