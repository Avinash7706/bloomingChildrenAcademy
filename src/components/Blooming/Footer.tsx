import { footerBg, container, sectionWrapper, logoWrapper, logoText, colTitle, linkList, linkItem, hrLine, copyright, socialWrapper, socialLink, socialIcon } from "../GlobalTextColor/GlobalFooter";

export default function Footer() {
  return (
       <footer className={`${footerBg}`}>
      <div className={`${container}`}>
        <div className={`${sectionWrapper}`}>
          <div className={`${logoWrapper}`}>
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className={logoText}>Flowbite</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {[
              {
                title: "Resources",
                links: [
                  { text: "Flowbite", url: "https://flowbite.com/" },
                  { text: "Tailwind CSS", url: "https://tailwindcss.com/" },
                ],
              },
              {
                title: "Follow us",
                links: [
                  {
                    text: "Github",
                    url: "https://github.com/themesberg/flowbite",
                  },
                  {
                    text: "Discord",
                    url: "https://discord.gg/4eeurUVvTy",
                  },
                ],
              },
              {
                title: "Legal",
                links: [
                  { text: "Privacy Policy", url: "#" },
                  { text: "Terms & Conditions", url: "#" },
                ],
              },
            ].map((section, i) => (
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
              "facebook",
              "discord",
              "twitter",
              "github",
              "dribbble",
            ].map((type, i) => (
              <a href="#" key={i} className={socialLink}>
                <span className="sr-only">{type}</span>
                {/* Placeholder SVG — You can replace each with specific icons */}
                <svg className={socialIcon} fill="currentColor">
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
