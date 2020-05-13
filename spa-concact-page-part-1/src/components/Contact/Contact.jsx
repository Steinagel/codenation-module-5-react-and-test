import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    let data = this.props.data === undefined ? {} : this.props.data;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">{data.avatar}</span>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{data.admissionDate}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;
