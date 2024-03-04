import Facebook from "../../assets/icon/icon_facebook.svg";
import Instagram from "../../assets/icon/icon_instagram.svg";
import Twitter from "../../assets/icon/icon_twitter.svg";
import Mail from "../../assets/icon/icon_mail.svg";
import Twitch from "../../assets/icon/icon_twitter.svg";
import Rectangle from "../../assets/img/Rectangle 74.png";

import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const yearEl = document.querySelector(".year");
    if (yearEl) {
      const currentYear = new Date().getFullYear();
      yearEl.textContent = currentYear;
    }
  }, []);
  return (
    <div>
      <footer id="footer" className="footer border-top p-4 mt-7">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-column gap-3">
                <ul className="list-unstyled">
                  <li className="list-item fw-bold">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  </li>
                  <li className="list-item mb-4 fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href="mailto:binarcarrental@gmail.com"
                    >
                      binarcarrental@gmail.com
                    </a>
                  </li>
                  <li className="list-item fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href="tel:081233334808"
                    >
                      081-233-334-808
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="d-flex flex-column align-items-center align-start">
                <ul className="list-unstyled">
                  <li className="list-item mb-3">
                    <a className="text-decoration-none text-dark" href="#">
                      Our services
                    </a>
                  </li>
                  <li className="list-item mb-3">
                    <a className="text-decoration-none text-dark" href="#">
                      Why Us
                    </a>
                  </li>
                  <li className="list-item mb-3">
                    <a className="text-decoration-none text-dark" href="#">
                      Testimonial
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="text-decoration-none text-dark" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="d-flex flex-column gap-3">
                <h6 className="fw-bold mb-2">Connect with us</h6>

                <ul className="list-unstyled d-flex gap-2">
                  <li className="list-item fw-bold">
                    <a className="text-decoration-none" href="#">
                      <img src={Facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li className="list-item fw-bold">
                    <a className="text-decoration-none" href="#">
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </li>
                  <li className="list-item fw-bold">
                    <a className="text-decoration-none" href="#">
                      <img src={Twitter} alt="Twitter" />
                    </a>
                  </li>
                  <li className="list-item fw-bold">
                    <a className="text-decoration-none" href="#">
                      <img src={Mail} alt="Mail" />
                    </a>
                  </li>
                  <li className="list-item fw-bold">
                    <a className="text-decoration-none" href="#">
                      <img src={Twitch} alt="Twitch" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex flex-column gap-3">
                <h6>
                  Copyright &copy; Binar <span className="year"></span>
                </h6>
                <img
                  className="footer-img img-fluid"
                  src={Rectangle}
                  alt="Rectangle"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
