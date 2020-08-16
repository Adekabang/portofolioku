import React from "react";
function PortofolioModal(props) {
  const { id, title, imgSrc, url, description } = props.portofolio;
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${id}`}
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
                    {title}
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
                    src={imgSrc}
                    alt={title}
                  />
                  <p className="mb-5">{description}</p>
                  <a href={url} className="btn btn-primary">
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
  );
}

export default PortofolioModal;
