function PopupCheck({init, handleChange, error}) {
  const {discord, condition} = init.desc;

  return (
    <div className="popup__item">
      <div className="popup__condition">
        <input
          onChange={handleChange}
          className="popup__check"
          name={init.name}
          id="check"
          type="checkbox"
          value="true"
          required
        />
        <label className="popup__desc" htmlFor="check">
          <span>{discord.text} </span> 
          <a className="popup__link" href={discord.href}>{discord.name}</a>
          <span> {condition.text} </span>
          <a className="popup__link" href={condition.href}>{condition.name}</a>
        </label>
      </div>
      <span className="popup__error">{error[init.name] ?? ''}</span>
    </div>
  )
}

export default PopupCheck;
