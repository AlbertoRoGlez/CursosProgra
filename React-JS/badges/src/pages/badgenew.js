import React from "react";
import "../components/styles/badgenew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/navbar";
import BadgeForm from "../components/badgeform";
import Badge from "../components/badge";

class BadgeNew extends React.Component {
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
                firstName="Alberto"
                lastName="Rosales"
                twitter="AlbertoRoGlez"
                jobTitle="Software Engineer"
                avatarUrl="https://static.platzi.com/media/avatars/avatars/AlbertoRosalesGlez_2808dc89-13c3-4067-b9a1-a7f42c8a6968.jpg"
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
        {/* //Badge-----------------------------------------------------------------// */}
      </div>
    );
  }
}

export default BadgeNew;
