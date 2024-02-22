function FooterSocial({link}) {
  const ComponentIcon = link.icon;

  return (
    <li className="footer__social" style={{'--color': link.color}}>
      <ComponentIcon className="footer__icon" />
      <a
        className="footer__overlay"
        href={link.href}
        title={link.name}
      />
    </li>
  )
}

export default FooterSocial;
