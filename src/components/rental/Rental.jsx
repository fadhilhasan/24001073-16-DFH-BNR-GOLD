import imgService from "../../assets/img/img_service.png";

const Rental = () => {
  return (
    <div>
      <section id="ourservices" className="section-rental mb-7">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6 gx-7">
              <img
                src={imgService}
                alt="Services"
                className="img-fluid w-100"
              />
            </div>

            <div className="col-12 col-md-6">
              <div className="text-container mt-4 mb-4">
                <h2 className="fw-bold fs-3 mb-4">
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <p className="lead fs-6 fw-semibold text-justify">
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
              </div>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary me-3 mb-3 bg-light d-inline-block p-2 rounded-circle"></i>
                  <p className="lead fs-6 fw-semibold">
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary me-3 mb-3 bg-light d-inline-block p-2 rounded-circle"></i>
                  <p className="lead fs-6 fw-semibold">
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary me-3 mb-3 bg-light d-inline-block p-2 rounded-circle"></i>
                  <p className="lead fs-6 fw-semibold">
                    Sewa Mobil Jangka Panjang Bulanan
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary me-3 mb-3 bg-light d-inline-block p-2 rounded-circle"></i>
                  <p className="lead fs-6 fw-semibold">
                    Layanan Airport Transfer / Drop In Out
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary me-3 mb-3 bg-light d-inline-block p-2 rounded-circle"></i>
                  <p className="lead fs-6 fw-semibold">
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rental;
