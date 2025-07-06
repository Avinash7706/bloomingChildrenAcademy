import { footerBg, container, sectionWrapper, logoWrapper, logoText, colTitle, linkList, linkItem, hrLine, copyright, socialWrapper, socialLink, socialIcon } from "../GlobalTextColor/GlobalFooter";
import { footersData } from "../Array/FooterArray";
import logo from "../../assets/BCA.svg"; // Adjust the path as necessary
import { brandName } from "../GlobalTextColor/bg";
import { FaFacebookF, FaDiscord, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
export default function Footer() {

  return (
       <footer className={`${footerBg}`}>
      <div className={`${container}`}>
        <div className={`${sectionWrapper}`}>
          <div className={`${logoWrapper}`}>
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src={logo}
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className={logoText}>{brandName}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footersData.map((section, i) => (
              <div key={i}>
                <h2 className={colTitle}>{section.title}</h2>
                <ul className={linkList}>
                  {section.links.map((link, j) => (
                    <li key={j} className="mb-4">
                      <a href={link.url} className={linkItem}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className={hrLine} />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className={copyright}>
            © 2023{" "}
            <a href="https://flowbite.com/" className={linkItem}>
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
           <div className={socialWrapper}>
      {[
        { name: "facebook", icon: <FaFacebookF />, href: "#" },
        { name: "discord", icon: <FaDiscord />, href: "#" },
        { name: "twitter", icon: <FaTwitter />, href: "#" },
        { name: "github", icon: <FaGithub />, href: "#" },
        { name: "dribbble", icon: <FaDribbble />, href: "#" },
      ].map((social, i) => (
        <a href={social.href} key={i} className={socialLink}>
          <span className="sr-only">{social.name}</span>
          <span className={socialIcon}>{social.icon}</span>
        </a>
      ))}
    </div>
        </div>
      </div>
    </footer>
  )
}
