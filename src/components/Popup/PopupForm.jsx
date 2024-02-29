import { useState } from "react";
import { initialInput, initialModal } from "../../initials/initials";
import PopupItem from "./PopupItem";
import PopupCheck from "./PopupCheck";

function PopupForm() {
  const [ disabled, setDisabled ] = useState(true);
  const [ error, setError ] = useState({});

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
      <PopupCheck
        init={initialModal}
        error={error}
        handleChange={handleChange}
      />
      <button
        className="popup__submit"
        type="submit"
        disabled={disabled}
        title={disabled
          ? initialModal.active.no
          : initialModal.active.yes
        }>
        {initialModal.button}
      </button>
    </form>
  )
}

export default PopupForm;
