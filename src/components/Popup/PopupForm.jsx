import { useEffect, useState } from "react";
import { initialInput, initialModal } from "../../initials/initials";
import PopupItem from "./PopupItem";

function PopupForm() {
  const [ disabled, setDisabled ] = useState(true);
  const [ error, setError ] = useState({});
  const { discord, condition } = initialModal.desc;

  const handleChange = (event) => {
    const { form } = document.forms;
    const { name, validationMessage } = event.target;

    if (form.checkValidity()) {
      setDisabled(false);
      setError({});
    } else {
      const errorMessage = validationMessage.length > 100
        ? validationMessage.substring(0, 100) + '...'
        : validationMessage;

      setDisabled(true);
      setError(state => ({
        ...state,
        [name]: errorMessage
      }));
    }
  }

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <form className="popup__form" id="form">
      <h3 className="popup__title">{initialModal.title}</h3>
      <ul className="popup__items">
        {initialInput.map((item, id) =>
          <PopupItem
            key={id}
            item={item}
            error={error}
            handleChange={handleChange}
          />
        )}
      </ul>
      <div className="popup__item">
        <div className="popup__condition">
          <input
            onChange={handleChange}
            className="popup__check"
            name={initialModal.name}
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
        <span className="popup__error">{error[initialModal.name] ?? ''}</span>
      </div>
      <button className="popup__submit" type="submit" disabled={disabled}>
        {initialModal.button}
      </button>
    </form>
  )
}

export default PopupForm;
