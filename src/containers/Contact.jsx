import React from "react";
import "./Contact.css";
import Instagram from "./Instagram";
import CommonWrapper from "../components/CommonWrapper";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <CommonWrapper>
        <div className="profile">
          <h3 className="name">Shoko Sato</h3>
          <img src="/img/profile.jpg" alt="profile" className="profile-img" />
          <p className="profile-sentence">
            {" "}日本の伝統文化には先人の知恵と発想があり、優れた技術は今に受け継がれています。
          麻、お香、飾り結びの清らかな美しさに心惹かれ結びの学びを始めました。結ぶ手にエネルギーが宿り自分らしく輝くための導きでもあります観て触れて五感を感じていただける作品をお届けしたいと思っています。<br/>日本燦々大麻飾り職人<br/>薫物屋香楽認定香司

          </p>
        </div>
        <div className="insta-container">
          <a href="https://www.instagram.com/shoko.musuhi/" className="insta">
            <img
              src="/img/Instagram_icon.png"
              alt="instagram"
              className="insta-icon"
            />
            <p>@shoko.musuhi</p>
          </a>
        </div>
        <Instagram />
      </CommonWrapper>
    </section>
  );
}

export default Contact;
