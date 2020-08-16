import React, { Component } from "react";

export default class PortofolioCard extends Component {
  render() {
    const { id, title, imgSrc, url, description } = this.props.portofolio;
    return (
      <>
        <div className="col-md-6 col-lg-4 mb-5">
          <div
            className="portfolio-item mx-auto"
            data-toggle="modal"
            data-target={`#portfolioModal${id}`}
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={imgSrc} alt={title} />
          </div>
        </div>

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
      </>
    );
  }
}
