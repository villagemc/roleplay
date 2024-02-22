function StickyLink({link, toggleNavigate}) {
  return (
    <li className="sticky__item" onClick={toggleNavigate}>
      <a className="sticky__link" href={link.href}></a>
      <span>{link.name}</span>
    </li>
  )
}

export default StickyLink;
