function AnswerDiscord({discord}) {
  const ComponentIcon = discord.icon;
  
  return (
    <div className="answer__discord" style={{'--color': discord.color}}>
      <span className="answer__discord-span">
        <ComponentIcon className="answer__discord-icon" />
      </span>
      <h4 className="answer__discord-title">{discord.title}</h4>
      <p className="answer__discord-subtitle">{discord.subtitle}</p>
      <a
        className="answer__discord-link"
        href={discord.href}
        title={discord.name}
      />
    </div>
  )
}

export default AnswerDiscord;
