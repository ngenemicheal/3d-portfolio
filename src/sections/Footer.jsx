import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) =>
            socialImg.url ? (
              <a
                key={index}
                href={socialImg.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialImg.name}
                className="icon"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            ) : (
              <div key={index} className="icon" aria-label={socialImg.name}>
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </div>
            )
          )}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Michael Ngene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
