import React from "react";
import PortofolioCard from "./PortofolioCard";
class PortofolioList extends React.Component {
  state = {
    portofolioLists: [],
  };
  componentDidMount = () => {
    fetch("https://api.jsonbin.io/b/5f3833874d9399103615755f")
      .then((response) => response.json())
      .then(({ portolist }) => this.setState({ portofolioLists: portolist }))
      .catch((error) => console.log(error));
  };
  componentDidUpdate() {
    console.log("update");
  }
  render() {
    console.log("render");
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
            {this.state.portofolioLists.map((portofolio) => {
              return <PortofolioCard key={portofolio.id} portofolio={portofolio} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default PortofolioList;
