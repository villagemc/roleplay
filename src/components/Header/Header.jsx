import { initialHeader } from "../../initials/initials";
import AnimateOne from "../Animate/AnimateOne";
import AnimateTwo from "../Animate/AnimateTwo";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__description">
          <h1 className="header__title">
            {initialHeader.title}<br />
            {initialHeader.name}
          </h1>
          <p className="header__subtitle">
            {initialHeader.subtitles.join('\n')}
          </p>
          <a className="header__link" href={initialHeader.link.href}>
            {initialHeader.link.name}
          </a>
          <AnimateOne />
          <AnimateTwo />
        </div>
        <div className="header__picture">
          <img
            className="header__person"
            src={initialHeader.arl.src}
            alt={initialHeader.arl.alt}
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
