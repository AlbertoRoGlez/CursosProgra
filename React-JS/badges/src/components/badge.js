import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/badge.css";

// Los componentes son clases.
// en JSX usamos className para las etiquetas en lugar de class porque Js tiene su propio class.
class Badge extends React.Component {
  render() {
    //Props-----------------------------------------------------------------------------------//
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    //Props-----------------------------------------------------------------------------------//
    return (
      <div className="Badge">
        {/* //Header-------------------------------------------------------------------------// */}
        <div className="Badge__header">
          <img src={confLogo} alt="Logo conferencia" />
        </div>
        {/* //Header-------------------------------------------------------------------------// */}
        {/* //Body-------------------------------------------------------------------------// */}
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        {/* //Body-------------------------------------------------------------------------// */}
        {/* //Footer-------------------------------------------------------------------------// */}
        <div className="Badge__footer">#platziconf</div>
        {/* //Footer-------------------------------------------------------------------------// */}
      </div>
    );
  }
}

// Lo exportamos porque estamos en otro archivo.
export default Badge;
