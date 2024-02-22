import { useId } from "react";

function PopupItem({item, handleChange, error}) {
  const id = useId();

  return (
    <li className="popup__item">
      <label className="popup__label" htmlFor={id}>
        {item.title}
      </label>
      <input
        id={id}
        className="popup__input"
        onChange={handleChange}
        autoComplete={item.autocomplete}
        name={item.name}
        placeholder={item.place}
        type={item.type}
        required={item.required}
      />
      <span className="popup__error">{error[item.name] ?? ''}</span>
    </li>
  )
}

export default PopupItem;
