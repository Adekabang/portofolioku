import React from "react";

function PortofolioList() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/cabin.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal2"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/cake.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal3"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/circus.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal1Label"
                    >
                      Log Cabin
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cabin.png"
                      alt=""
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Read more
                      <i className="fas fa-arrow-alt-circle-right fa-fw"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal2Label"
                    >
                      Tasty Cake
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cake.png"
                      alt=""
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Read more
                      <i className="fas fa-arrow-alt-circle-right fa-fw"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal3Label"
                    >
                      Circus Tent
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-5"
                      src="assets/img/portfolio/circus.png"
                      alt=""
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Read more
                      <i className="fas fa-arrow-alt-circle-right fa-fw"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortofolioList;
