import StickyLink from "./StickyLink";
import { useState } from "react";
import {
  initialAnket,
  initialIconSticky,
  initialLinks,
  initialLogo
} from "../../initials/initials";

function Sticky() {
  const [ isActive, setIsActive ] = useState(true);

  const toggleNavigate = () => {
    setIsActive(!isActive);
  }

  const closeNavigate = () => {
    setIsActive(true);
  }

  const handleClick = (e) => {
    if (e.target.classList.contains('sticky__navigate'))
      closeNavigate();
  }

  const ComponentIcon = initialIconSticky.icon;

  const classActive = isActive && 'sticky__navigate_noactive';

  console.log(location);

  return (
    <div className="sticky">
      <div className="sticky__container container">
        <div className="sticky__block">
          <a className="sticky__logo" href={initialLogo.href}>
            <img
              className="sticky__image"
              src={initialLogo.art.src}
              alt={initialLogo.art.alt}
            />
          </a>
          <nav onClick={handleClick} className={`sticky__navigate ${classActive}`}>
            <ul className='sticky__links'>
              {initialLinks.map((link, id) =>
                <StickyLink
                  key={id}
                  link={link}
                  toggleNavigate={toggleNavigate}
                />
              )}
            </ul>
          </nav>
        </div>
        <a className="sticky__button" href={initialAnket.href}>
          {initialAnket.name}
        </a>
        <button className="sticky__menu" onClick={toggleNavigate}>
          <ComponentIcon />
        </button>
      </div>
    </div>
  )
}

export default Sticky;
