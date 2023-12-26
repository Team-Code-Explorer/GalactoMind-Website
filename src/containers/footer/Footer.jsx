import React from 'react';
import './footer.css';

const Footer = () => (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/about">About Us</a>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/contact">Contact Us</a>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/privacy-policy">Privacy Policy</a>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/terms">Terms & Condition</a>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/faq">FAQs & Help</a>
            <a style={{ color: '#fc9506' }} className="btn btn-link" href="https://explorecode.live/team">Our Team</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <a href="bal" style={{ color: 'white' }}>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"
                style={{ color: 'white !important' }}></i>Manbazar, Purulia</p>
            </a>
            <a style={{ color: '#fc9506' }} href="tel:+91-9064485906">
              <p className="mb-2"><i className="fa fa-phone-alt me-3"
                style={{ color: 'white !important' }}></i>+91-9064485906</p>
            </a>
            <a style={{ color: '#fc9506' }} href="mailto:support@explorecode.live">
              <p className="mb-2"><i className="fa fa-envelope me-3"
                style={{ color: 'white !important' }}></i>support@explorecode.live</p>
            </a>
            <a style={{ color: '#fc9506' }} href="https://wa.me/+919064485906">
              <p className="mb-2"><i className="fab fa-whatsapp me-3"
                style={{ color: 'white !important' }}></i>+91-9064485906</p>
            </a>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://github.com/Team-Code-Explorer"><i
                className="fab fa-github"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://twitter.com/ExploreCodeWiki"><i
                className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/ExploreCodeWorld"><i
                className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/@Explore-Code"><i
                className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social"
                href="https://www.linkedin.com/company/explore-code"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Technologies</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/cpp.png" alt="C++"
                  style={{ borderRadius: '10px' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/python.png" alt="Python"
                  style={{ borderRadius: '10px' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/javascript.png" alt="JavaScript"
                  style={{ borderRadius: '10px' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/react.png" alt="React.js"
                  style={{ borderRadius: '10px' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/mongodb.png" alt="MongoDB"
                  style={{ borderRadius: '10px' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="img/git.png" alt="Git Bash"
                  style={{ borderRadius: '10px' }} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Subscribe to our newsletter to get latest updates.</p>
            <br />
            <br />
            <div className="position-relative mx-auto" >
            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your Email"
              id="newsLetter" />
            <button type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div><div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; 2023 :: <a className="border-bottom" href="https://explorecode.live">Code Explorer</a>, All
            Right Reserved.

            Designed By <a className="border-bottom" href="https://pabitrabanerjee.me">Pabitra
              Banerjee</a><br /><br />
            Distributed By <a className="border-bottom" href="https://mbwebbers.tech">MB WEBBER'S</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href="https://explorecode.live">Home</a>
              <a href="https://explorecode.live/contact">Contact</a>
              <a href="https://explorecode.live/help">Help</a>
              <a href="https://explorecode.live/faq">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
);

export default Footer;