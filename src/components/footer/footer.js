import React from "react";
import "./footer.css";

import Logo from "../../assests/logo.png";
import PlayStore from "../../assests/googleplay.webp";
import Appstore from "../../assests/app-store.webp";
import Github from "../../assests/github.png";
import Linkedin from "../../assests/linkedin.png";

function Footer() {
  return (
    <div>
      <div className="footer-div">
        <div className="g-0 row">
          <div className="col-md-5 col-sm-12 cards img ">
            <img src={Logo} alt="image" />
            <p>Download our app today:</p>
            <div className="logo-div">
              <img
                onclick="window.open('https://play.google.com/store/apps/details?id=com.appiskey.dang','_blank')"
                src={PlayStore}
                alt="image"
              />
              <img src={Appstore} alt="image" />
            </div>
          </div>
          <div className="col-md-2 col-sm-12 cards second">
            <p style={{ textAlign: "center" }}>
              Copyright @Mohamad Agbarya
              <br />
              DOB:9/August/1999
            </p>
          </div>
          <div className="col-md-5 col-sm-12 cards third">
            <div>
              <img
                src={Github}
                alt="image"
                onClick={() => {
                  window.open(
                    "https://github.com/mohamadAgbarya/mohamadAgbarya.git"
                  );
                }}
              />
              <img
                src={Linkedin}
                alt="image"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/mohamad-agbraya-012459232/"
                  );
                }}
              />
            </div>
            <div className="termsAndCondition">
              <a target="_blank" style={{ cursor: "pointer" }}>
                Terms &amp; Condition
              </a>
              <a target="_blank" style={{ cursor: "pointer" }}>
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footerHide">
            <p>Download our app today:</p>
            <div className="logo-div">
              <img src="./assests/images/googleplay.webp" alt="image" />
              <img src="./assests/images/app-store.webp" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
