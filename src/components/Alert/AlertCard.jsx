function AlertCard({card}) {
  const ComponentIcon = card.icon;

  return (
    <li className="alert__card" style={{'--color': card.color}}>
      <ComponentIcon className="alert__icon" />
      <h4 className="alert__title">{card.title}</h4>
      <p className="alert__subtitle">{card.subtitle}</p>
    </li>
  )
}

export default AlertCard;
