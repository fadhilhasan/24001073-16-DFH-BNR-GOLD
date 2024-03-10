import imgCar from "../../assets/img/img_car.png";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionHeroEl = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        setIsSticky(!ent.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (sectionHeroEl.current) {
      observer.observe(sectionHeroEl.current);
    }

    return () => {
      if (observer && sectionHeroEl.current) {
        observer.unobserve(sectionHeroEl.current);
      }
    };
  }, [sectionHeroEl]);

  const btnNavEl = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        ref={sectionHeroEl}
        className={`header ${isSticky ? "sticky" : ""}`}
      >
        <div className={`navigation ${isOpen ? "nav-open" : ""}`}>
          <a href="#">
            <img
              className="logo img-fluid"
              alt="BNR Logo"
              src="https://placehold.co/600x300?text=Logo"
            />
          </a>
          <div className="btn-mobile-nav-overlay"></div>

          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link" href="#ourservices">
                  Our Servies
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#whyus">
                  Why Us
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <button
            ref={btnNavEl}
            className="btn-mobile-nav"
            onClick={handleClick}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="icon-mobile-nav"
              name="menu-outline"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              fillRule="evenodd"
              className="icon-mobile-nav"
              name="close-outline"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
            </svg>
          </button>
        </div>

        <header className="section-hero mb-7 pt-2">
          <div className="container-fluid pt-6">
            <div className="row">
              <div className="col-md-6 gx-6 margin-bottom-sm">
                <h1 className="fw-bold pt-1 pt-md-6">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="lead text-justify">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>

                <a href="#" className="btn btn-secondary text-white">
                  Mulai Sewa Mobil
                </a>
              </div>

              <div className="col-md-6">
                <img src={imgCar} alt="Car" className="img-fluid" />
              </div>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
};

export default Header;
