import imgCewe from "../../assets/img/img_cewe.png";
import imgCowo from "../../assets/img/img_cowo.png";

const Testimonial = () => {
  return (
    <div>
      <section id="testimonials" className="section-testimonials">
        <div className="container">
          <div className="container-text text-center mb-5">
            <h2 className="fw-bold fs-3">Testimonials</h2>
            <p className="lead fs-6 fw-semibold">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>

          <div id="carouselSlide" className="carousel slide mb-5">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex gap-4 align-center bg-light rounded-3 p-6">
                        <div className="img-container">
                          <img src={imgCewe} className="d-block" alt="..." />
                        </div>

                        <div className="text-container align-center">
                          <div className="icons">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                          </div>

                          <p className="my-1 fw-semibold fs-5 mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non aut, reiciendis quam vero error minima
                            consectetur possimus quibusdam sint voluptatum.
                          </p>
                          <p>John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex gap-4 bg-light rounded-3 p-6 align-center">
                        <div className="img-container">
                          <img src={imgCowo} className="d-block" alt="..." />
                        </div>

                        <div className="text-container align-center">
                          <div className="icons">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                          </div>

                          <p className="my-1 fw-semibold fs-5 mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non aut, reiciendis quam vero error minima
                            consectetur possimus quibusdam sint voluptatum.
                          </p>
                          <p>John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselSlide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-secondary rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselSlide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-secondary d-block rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
