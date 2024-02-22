function FooterDocument({docment}) {
  return (
    <li>
      <a className="footer__document" href={docment.href}>
        {docment.name}
      </a>
    </li>
  )
}

export default FooterDocument;
