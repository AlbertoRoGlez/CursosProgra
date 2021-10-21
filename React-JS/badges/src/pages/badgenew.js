import React from "react";
import "../components/styles/badgenew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/navbar";
import BadgeForm from "../components/badgeform";
import Badge from "../components/badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  render() {
    return (
      <div>
        {/* //Navbar-----------------------------------------------------------------// */}
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        {/* //Navbar-----------------------------------------------------------------// */}
        {/* //Badge-----------------------------------------------------------------// */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://static.platzi.com/media/avatars/avatars/AlbertoRosalesGlez_2808dc89-13c3-4067-b9a1-a7f42c8a6968.jpg"
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
        {/* //Badge-----------------------------------------------------------------// */}
      </div>
    );
  }
}

export default BadgeNew;
