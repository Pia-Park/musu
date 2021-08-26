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
            {" "}
            古来より大麻は神様の宿る神聖な植物、罪穢れを祓う力があるとされる大麻(精麻)に魅了され結んでいます。大麻の祓いとは元の氣に整え本来の自分(魂)と繋げてくれます。お飾りを祓い清めたい場所に飾る、麻を曳き撫で(触れ)体感していただきたいと思います。皆様とご縁の糸に結ばれますよう願っております。
          </p>
        </div>
        <div className="insta-container">
          <a href="https://www.instagram.com/shoko.musuhi/" className="insta">
            <img
              src="/img/Instagram_icon.png"
              alt="instagram"
              className="insta-icon"
            />
            @ShokoSato
          </a>
        </div>
        <Instagram />
      </CommonWrapper>
    </section>
  );
}

export default Contact;
