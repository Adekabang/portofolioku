import React from "react";
import PortofolioModal from "./PortofolioModal";

export default function PortofolioCard(props) {
  const { id, title, imgSrc } = props.portofolio;
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
      <PortofolioModal portofolio={props.portofolio} />
    </>
  );
}
