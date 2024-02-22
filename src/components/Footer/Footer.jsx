import { initialFooter } from "../../initials/initials";
import FooterDocument from "./FooterDocument";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__socials">
          {initialFooter.links.map((link, id) =>
            <FooterSocial key={id} link={link} />
          )}
        </ul>
        <div className="footer__descriptions">
          <p className="footer__description">
            {initialFooter.author}
          </p>
          <p className="footer__description footer__description_type_sub">
            {initialFooter.description}
          </p>
        </div>
        <ul className="footer__documents">
          {initialFooter.documents.map((document, id) =>
            <FooterDocument key={id} docment={document} />
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
