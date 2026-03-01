"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    const pre = document.getElementById("pre-loader");
    if (pre) pre.style.display = "none";
  }, []);

  return (
    <>
      <div className="wrapper">
        <div id="pre-loader">
          <img src="/images/pre-loader/loader-10.svg" alt="loading" />
        </div>

        <section id="homesection"></section>

        <header id="header" className="header default text-dark">
          <div className="menu" id="onepagenav">
            <nav id="menu" className="mega-menu">
              <section className="menu-list-items">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 position-relative">
                      <ul className="menu-logo">
                        <li>
                          <a href="#homesection">
                            <img id="logo_img" src="/demo-one-page/agency-02/images/logo.png" alt="logo" />
                          </a>
                        </li>
                      </ul>
                      <div className="menu-bar">
                        <ul className="menu-links">
                          <li className="active">
                            <a href="#homesection">Home</a>
                          </li>
                          <li>
                            <a href="#about-us">About us</a>
                          </li>
                          <li>
                            <a href="#who-we-are">Who we are</a>
                          </li>
                          <li>
                            <a href="#service">Services</a>
                          </li>
                          <li>
                            <a href="#contact-us">Contact us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
          </div>
        </header>

        <section
          className="slider-parallax height-100vh banner-agency-02 parallax"
          style={{ background: "url(/demo-one-page/agency-02/images/bg/01.jpg)" }}
        >
          <div className="slider-content-middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="slider-content text-start">
                    <p className="text-black">We will make your dreams come true</p>
                    <h1 className="text-black mt-20">
                      We do things <span className="theme-color"> differently </span>
                    </h1>
                    <p className="mt-20">
                      Webster is the most enticing, creative, modern and multipurpose Premium HTML5 Template suitable for any
                      business or corporate websites.
                    </p>
                    <a className="button mt-20" href="#about-us">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agency-02-action-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="action-box theme-bg">
                  <h3 className="mb-0">
                    <strong> Webster: </strong>The most powerful template ever on the market
                  </h3>
                  <a className="button button-border white" href="#contact-us">
                    <span>Contact Us</span>
                    <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="agency-02-about page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <img className="img-fluid" src="/demo-one-page/agency-02/images/about/01.jpg" alt="about" />
              </div>
              <div className="col-lg-4 col-md-5 col align-self-center">
                <div className="agency-02-about-content-right sm-mt-30 sm-mb-50">
                  <h3>
                    <i> Agency That Empowers You... </i>
                  </h3>
                  <p className="mt-20 mb-30">
                    Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features and his
                    desire to constantly become better.
                  </p>
                  <a className="button" href="#contact-us">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-lg-6 col align-self-center">
                <div className="agency-02-about-content-left sm-mb-50">
                  <h3>
                    <i> Conferences dedicated to building remarkable events</i>
                  </h3>
                  <p className="mt-20 mb-30">
                    Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal
                    liabilities, and his desire to constantly become better.
                  </p>
                  <a className="button" href="#service">
                    View now
                  </a>
                </div>
              </div>
              <div className="col-md-7 col-lg-6">
                <img className="img-fluid full-width" src="/demo-one-page/agency-02/images/about/02.jpg" alt="about" />
              </div>
            </div>
          </div>
        </section>

        <section className="o-hidden">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-4 services-text-box-black">
                <div className=" text-white">
                  <div className="owl-carousel" data-nav-dots="true" data-items="1" data-md-items="1" data-sm-items="1">
                    <div className="item">
                      <div className="testimonial text-white clean">
                        <div className="testimonial-avatar">
                          <img alt="" src="/images/team/01.jpg" />
                        </div>
                        <div className="testimonial-info">
                          Excellent Customer support! These guys reply within minutes sometimes and really help you with when you need
                          them. The template itself is very extended as well. Happy with my purchase!
                        </div>
                        <div className="author-info">
                          <strong>
                            15Twelve - <span>ThemeForest user</span>
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-white clean">
                        <div className="testimonial-avatar">
                          <img alt="" src="/images/team/02.jpg" />
                        </div>
                        <div className="testimonial-info">
                          One of the most complete template here. Thanks a lot for such great features, pages, shortcodes and home
                          variations. Incredible Job. And the best of all, great introductions
                        </div>
                        <div className="author-info">
                          <strong>
                            Xerracol - <span>ThemeForest user</span>
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial text-white clean">
                        <div className="testimonial-avatar">
                          <img alt="" src="/images/team/03.jpg" />
                        </div>
                        <div className="testimonial-info">
                          This is a well put together template and the developer offers great support. I've been in contact with them and
                          the response was prompt and everything has been taken care of.
                        </div>
                        <div className="author-info">
                          <strong>
                            Warble - <span>ThemeForest user</span>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 hidden-md-down jarallax" data-speed="0.6" data-img-src="/demo-one-page/agency-02/images/bg/02.jpg"></div>
            </div>
          </div>
        </section>

        <section className="agency-02-action-box width-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="action-box white-bg">
                  <h3 className="mb-0">Exclusive multi-purpose 100% responsive template</h3>
                  <div className="popup-video-image popup-gallery">
                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="agency-02-history page-section-ptb white-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <img className="img-fluid mx-auto d-block" src="/images/clients/02.png" alt="client" />
                  </div>
                  <div className="col-md-8">
                    <h4>Satisfaction matters</h4>
                    <p>Webster is the most enticing, creative, modern and multipurpose Premium HTML5 Template suitable for any business.</p>
                  </div>
                </div>
                <div className="agency-02-history-who white-bg mt-50 text-center">
                  <h2 className="theme-color mb-30">Who we are</h2>
                  <strong>
                    The first thing to remember about success is that it is a process – nothing more, nothing less.
                  </strong>
                  <p className="mt-20">
                    For those of you who are serious about having more, doing more, giving more and being more, success is achievable with
                    some understanding of what to do, some discipline around planning and execution of those plans and belief that you can
                    achieve your desires.
                  </p>
                  <a className="button mt-40" href="#contact-us">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-6 sm-mt-30">
                <img className="img-fluid" src="/demo-one-page/agency-02/images/about/03.jpg" alt="about" />
                <div className="mt-30">
                  <h3>Our skill makes our clients</h3>
                  <div className="skill skill-medium">
                    <div className="skill-bar" data-color="#d12326" data-percent="85" data-delay="0" data-type="%">
                      <div className="skill-title">HTML5</div>
                    </div>
                  </div>
                  <div className="skill skill-medium">
                    <div className="skill-bar" data-color="#d12326" data-percent="90" data-delay="0" data-type="%">
                      <div className="skill-title">CSS3</div>
                    </div>
                  </div>
                  <div className="skill skill-medium">
                    <div className="skill-bar" data-color="#d12326" data-percent="80" data-delay="0" data-type="%">
                      <div className="skill-title">Javascript / jQuery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="white-bg o-hidden">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-4 col-md-4 black-bg">
                <div className="agency-feature ">
                  <span className="ti-layers-alt"></span>
                  <h3 className="text-white">Many Style Available</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 agency-bg">
                <div className="agency-feature">
                  <span className="ti-mouse"></span>
                  <h3>Parallax Sections </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 theme-bg">
                <div className="agency-feature">
                  <span className="ti-hand-open"></span>
                  <h3 className="text-white">Unlimited layouts </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="gray-bg page-section-ptb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h2 className="mb-50">Have a look at the professional services</h2>
              </div>
            </div>
            <div className="row">
              {[
                { icon: "ti-desktop", title: "Perfect design", text: "Responsive Lorem Ipsum used since the 1500s is reproduced below for those here are basically six key areas.. " },
                { icon: "ti-headphone", title: "24/7 Customer support", text: "Great support quibusdam reproduced enim here are basically six key areas expedita sed quia nesciunt incidunt.." },
                { icon: "ti-panel", title: "Easy to Customize", text: "Fully customizable template enim expedita sed quia here are basically six key areas nesciunt incidunt.." },
                { icon: "ti-shield", title: "Powerful Performance", text: "Fast as light Ipsum used since here are basically six key areas the 1500s is reproduced below for those Sections.. " },
                { icon: "ti-split-v", title: "Parallax Sections", text: "Fully customizable template enim here are basically six key areas expedita sed quia nesciunt incidunt accusamus.." },
                { icon: "ti-image", title: "Revolution Slider", text: "Fast as light Ipsum used since the 1500s is reproduced below for here are basically six key areas those Sections.. " },
                { icon: "ti-heart", title: "Advanced Blog Options", text: "Fast as light Ipsum used since here are basically six key areas the 1500s is reproduced below for those Sections.. " },
                { icon: "ti-settings", title: "Built with HTML5 and CSS3", text: "Fully customizable template enim here are basically six key areas expedita sed quia nesciunt incidunt accusamus.." },
                { icon: "ti-star", title: "Advanced Portfolio Options", text: "Fast as light Ipsum used since the 1500s is reproduced below for here are basically six key areas those Sections.. " },
              ].map(({ icon, title, text }) => (
                <div key={title} className="col-lg-4 col-md-4 col-sm-6">
                  <div className="feature-text left-icon mb-50">
                    <div className="feature-icon">
                      <span className={icon} aria-hidden="true"></span>
                    </div>
                    <div className="feature-info">
                      <h5>{title}</h5>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="white-bg page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h2>Innovation Meets Your Requirements</h2>
                <p>Simple and well-structured coding, high quality and flexible layout, scalable features along with color schemes to create tailor-cut websites.</p>
              </div>
              <div className="col-lg-8 col-md-8 sm-mt-40">
                <div className="row">
                  {[{ percent: 77, label: "SKILLS" }, { percent: 89, label: "CONTENT" }, { percent: 77, label: "WEBSITES" }].map(({ percent, label }) => (
                    <div key={label} className="col-md-4 col-sm-4 text-center xs-mb-20">
                      <span className="round-chart" data-percent={percent} data-width="13" data-size="130" data-color="#d12326">
                        <span className="percent"></span>
                      </span>
                      <h5>{label}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="agency-02-contact-title page-section-ptb bg-overlay-black-50 jarallax" data-speed="0.6" data-img-src="/demo-one-page/agency-02/images/bg/01.jpg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-50 position-relative">
                <h2 className="text-white">Contact Us</h2>
                <p className="text-white"> Either way, it’s governed by who you think you are and what circumstances you accept as appropriate for you.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer gray-footer agency-02-contact page-section-pt pos-r gray-bg">
          <div className="container">
            <div className="footer-contact white-bg pl-50 pr-50">
              <div className="row">
                <div className="col-lg-6 col-md-6 sm-mb-40 ">
                  <div className="contact-3-info">
                    <div className="clearfix">
                      <div id="formmessage">Success/Error Message Goes Here</div>
                      <form id="contactform" role="form" method="post" action="/api/contact">
                        <div className="contact-form clearfix">
                          <div className="section-field">
                            <input id="name" type="text" placeholder="Name*" className="form-control" name="name" />
                          </div>
                          <div className="section-field">
                            <input type="email" placeholder="Email*" className="form-control" name="email" />
                          </div>
                          <div className="section-field">
                            <input type="text" placeholder="Phone*" className="form-control" name="phone" />
                          </div>
                          <div className="section-field textarea">
                            <textarea className="input-message form-control" placeholder="Comment*" rows={7} name="message"></textarea>
                          </div>
                          <div className="g-recaptcha section-field clearfix" data-sitekey="6LfNmS0UAAAAAO_ZVFQoQmkGPMlQXmKgVbizHFoq"></div>
                          <input type="hidden" name="action" value="sendEmail" />
                          <button id="submit" name="submit" type="submit" value="Send" className="button">
                            <span> Send message </span> <i className="fa fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                      <div id="ajaxloader" style={{ display: "none" }}>
                        <img className="mx-auto mt-30 mb-30 d-block" src="/images/pre-loader/loader-02.svg" alt="loading" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="agency-map">
                    <div style={{ width: "100%", height: "400px" }} id="map-04" className="g-map" data-type="light"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="footer-Newsletter text-center mt-30 mb-20">
                  <div id="mc_embed_signup_scroll">
                    <form action="/api/mailchimp" method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate">
                      <div id="msg"> </div>
                      <div id="mc_embed_signup_scroll_2">
                        <input id="mce-EMAIL" className="form-control" type="text" placeholder="Enter your email address" name="email1" defaultValue="" />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                      </div>
                      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_b7ef45306f8b17781aa5ae58a_6b09f39a55" tabIndex={-1} defaultValue="" />
                      </div>
                      <div className="clear">
                        <button type="submit" name="submitbtn" id="mc-embedded-subscribe" className="button mt-40 form-button">
                          Get notified <i className="fa fa-bell-o"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright white-bg mt-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="text-center text-lg-start">
                    <li className="list-inline-item">
                      <a href="#">Terms &amp; Conditions </a> &nbsp;&nbsp;&nbsp;|
                    </li>
                    <li className="list-inline-item">
                      <a href="#">API Use Policy </a> &nbsp;&nbsp;&nbsp;|
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Privacy Policy </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="text-center text-lg-end sm-mt-10">
                    <p className="mb-0">
                      &copy; {new Date().getFullYear()} <a href="#"> Webster </a> All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div id="back-to-top">
        <a className="top arrow" href="#top">
          <i className="fa fa-angle-up"></i> <span>TOP</span>
        </a>
      </div>

      <Script src="/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script id="plugin_path" strategy="beforeInteractive">{`var plugin_path = '/js/';`}</Script>
      <Script src="/js/plugins-jquery.js" strategy="beforeInteractive" />
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
