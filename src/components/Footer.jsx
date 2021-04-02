import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-dark-slate-blue padding-9-half-rem-tb md-padding-8-half-rem-tb footer-sticky">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="social-icon-style-10 margin-3-half-rem-bottom">
                <ul className="large-icon">
                  <li>
                    <a
                      className="facebook text-white"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                      <span />
                    </a>
                  </li>
                  <li>
                    <a
                      className="behance text-white"
                      href="http://www.telegram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-telegram" />
                      <span />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin text-white"
                      href="http://www.linkedin.com/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                      <span />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram text-white"
                      href="http://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="alt-font text-slate-blue-light font-weight-300 margin-10px-bottom d-block letter-spacing-minus-2px">
                Отправьте ваши идеи и отзывы на наш имэйл
              </h4>
              <h4 className="alt-font font-weight-600 margin-7-rem-bottom">
                <a
                  href="mailto:info@domain.com"
                  className="text-gradient-turquoise-green-yellowish"
                >
                  info@domain.com
                </a>
              </h4>
              <p className="alt-font text-small text-gradient-turquoise-green-yellowish">
                © 2021 All Rights Reserved. A2K
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}
