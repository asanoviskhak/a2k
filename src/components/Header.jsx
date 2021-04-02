import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-boxed header-reverse-scroll bg-white-glass">
      <div className="container-fluid nav-header-container">
        <div className="col-6 col-lg-2 mr-auto pl-lg-0 mb-0 pt-0">
          <a className="navbar-brand" href="index.html">
            {/* <img
              src="images/logo-white.png"
              data-at2x="images/logo-white@2x.png"
              className="default-logo"
              alt="omg"
            /> */}
            <h4 className="mb-0 font-weight-800">A2K</h4>
          </a>
        </div>
        <div className="col-auto menu-order px-lg-0">
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav alt-font">
              {/* start menu item */}
              <li className="nav-item">
                <a href="#main" className="inner-link nav-link">
                  Главная
                </a>
              </li>
              {/* end menu item */}
              {/* start menu item */}
              <li className="nav-item">
                <a href="#how-it-works" className="inner-link nav-link">
                Как это работает?
                </a>
              </li>
              <li className="nav-item">
                <a href="#our-services" className="inner-link nav-link">
                Наши услуги
                </a>
              </li>
              <li className="nav-item">
                <a href="#who-are-we" className="inner-link nav-link">
                  О нас
                </a>
              </li>
              {/* end menu item */}
              <li className="nav-item">
                <a href="#contact-us" className="inner-link nav-link">
                  Связаться
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto text-right pr-0 font-size-0">
          <div className="header-search-icon search-form-wrapper">
            <a
              href="javascript:void(0)"
              className="search-form-icon header-search-form"
            >
              <i className="feather icon-feather-search" />
            </a>
            {/* start search input */}
            <div className="form-wrapper">
              <button
                title="Close"
                type="button"
                className="search-close alt-font"
              >
                ×
              </button>
              <form
                id="search-form"
                role="search"
                method="get"
                className="search-form text-left"
                action="https://lithohtml.themezaa.com/search-result.html"
              >
                <div className="search-form-box">
                  <span className="search-label alt-font text-small text-uppercase text-medium-gray">
                    What are you looking for?
                  </span>
                  <input
                    className="search-input alt-font"
                    id="search-form-input5e219ef164995"
                    placeholder="Enter your keywords..."
                    name="s"
                    defaultValue
                    type="text"
                    autoComplete="off"
                  />
                  <button type="submit" className="search-button">
                    <i
                      className="feather icon-feather-search"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
            {/* end search input */}
          </div>
        </div>
      </div>
    </nav>
  );
}
