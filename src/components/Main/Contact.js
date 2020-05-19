import React from "react";
import "../../styles/layouts/Main.scss";

const Contact = (props) => (
  <>
    <section className="section" id="contact">
      <p className="sectionTitle">contact</p>
      <div className="content">
        <p>E-mail: anzamarska@gmail.com</p>
        <p className="textCV">Curriculum Vitae: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1elXIB2xp_dc-x_ZjcfRAp4Z55vaPYwY1/view?usp=sharing"
        >
          <img className="iconCV" src="CVicon.svg.png" alt="" />
        </a>
      </div>
    </section>
  </>
);

export default Contact;
