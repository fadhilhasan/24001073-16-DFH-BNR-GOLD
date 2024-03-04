import Thumb from "../../assets/icon/icon_complete.svg";
import Price from "../../assets/icon/icon_price.svg";
import Clock from "../../assets/icon/icon_24hrs.svg";
import Professional from "../../assets/icon/icon_professional.svg";

const Why = () => {
  return (
    <div>
      <section id="whyus" className="section-whyus mb-7 pt-3">
        <div className="container">
          <div className="text-container mb-5">
            <h2 className="fw-bold fs-3">Why Us?</h2>
            <p className="lead fs-6 fw-semibold">
              Mengapa harus pilih Binar Car Rental?
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-4">
                  <i>
                    <img src={Thumb} alt="icon_complete" />
                  </i>
                  <h5 className="card-title my-3 fw-bold">Mobil Lengkap</h5>
                  <p className="card-text fw-semibold">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-4">
                  <img src={Price} alt="icon_price" />
                  <h5 className="card-title my-3 fw-bold">Harga Murah</h5>
                  <p className="card-text fw-semibold">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-4">
                  <img src={Clock} alt="icon_24hrs" />
                  <h5 className="card-title my-3 fw-bold">Layanan 24 Jam</h5>
                  <p className="card-text fw-semibold">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-4">
                  <img src={Professional} alt="icon_professional" />
                  <h5 className="card-title my-3 fw-bold">
                    Sopir Professional
                  </h5>
                  <p className="card-text fw-semibold">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
