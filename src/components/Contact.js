import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Halo, ${this.state.name} terimakasih sudah menghubungi kami`);
  };
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form
                id="contactForm"
                name="sentMessage"
                onSubmit={this.handleSubmit}
              >
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      name="name"
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      name="phone"
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                      name="message"
                      onChange={this.handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-xl"
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
