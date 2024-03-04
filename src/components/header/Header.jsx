import imgCar from "../../assets/img/img_car.png";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove("sticky");
        }
      },
      {
        // in the viewport
        root: null,
        threshold: 0,
      }
    );
    obs.observe(sectionHeroEl);

    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".navigation");

    btnNavEl.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
      console.log("Button clicked");
    });
  });

  return (
    <div>
      <header className="bg-light mb-5">
        <div className="navigation">
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

          <button className="btn-mobile-nav">
            <ion-icon
              className="icon-mobile-nav"
              name="menu-outline"
            ></ion-icon>
            <ion-icon
              className="icon-mobile-nav"
              name="close-outline"
            ></ion-icon>
          </button>
        </div>

        <header className="section-hero mb-7 pt-2">
          <div className="container-fluid pt-6">
            <div className="row">
              <div className="col-md-6 gx-6 margin-bottom-sm">
                <h1 className="fw-bold pt-6 p-sm">
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
