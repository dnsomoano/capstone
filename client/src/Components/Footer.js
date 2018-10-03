import React, { Component } from "react";
import "../styling/Footer.css";
// import GithubLogo from "../images/Icon-sets/Social-Media-2169/if_social_media_social_media_logo_github_2_2993772.png";
import GithubAltLogo from "../images/Icon-sets/Social-Media-2169/if_social_media_social_media_logo_github_2993771.png";
import GMailLogo from "../images/Icon-sets/Gmail/if_16_gmail_email_mail_communication_message_service_2109144.png";
import LinkedInLogo from "../images/Icon-sets/Outline-Flat-Design/if_linkedin_2106400.png";
import MediumLogo from "../images/Icon-sets/Social-Media-2169/if_medium_social_media_logo_2993800.png";
import MeetUpLogo from "../images/Icon-sets/Social Media & Logos I Flat Colorful/if_5370_-_Meetup_1313549.png";
// import SlackLogo from "./images/Icon-sets/Social-Media-2169/if_social_media_social_media_logo_slack_2993744.png";
import TwitterLogo from "../images/Icon-sets/Outline-Flat-Design/if_Twitter_2106404.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="dev-footer">
          <section className="nav-bar">
            <ul>
              <li>
                <a href="https://github.com/dnsomoano" target="_blank">
                  <img
                    src={GithubAltLogo}
                    className="icon-style github-logo"
                    alt="Github"
                  />
                </a>
              </li>
              <li>
                <a href="mailto: dnsomoano@gmail.com?subject= &body= ">
                  <img
                    src={GMailLogo}
                    className="icon-style gmail-logo"
                    alt="GMail"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-somoano/"
                  target="_blank"
                >
                  <img
                    src={LinkedInLogo}
                    className="icon-style"
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@dnsomoano" target="_blank">
                  <img src={MediumLogo} className="icon-style" alt="Medium" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.meetup.com/members/259794997/"
                  target="_blank"
                >
                  <img src={MeetUpLogo} className="icon-style" alt="MeetUp" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/DNSomoano" target="_blank">
                  <img src={TwitterLogo} className="icon-style" alt="Twitter" />
                </a>
              </li>
            </ul>
          </section>
          <hr className="line" />
          <span className="signature">® Created by Daniel N Somoano</span>
          <span className="signature">dnsomoano@gmail.com</span>
        </footer>
      </div>
    );
  }
}

export default Footer;
