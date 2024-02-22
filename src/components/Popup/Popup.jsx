import { initialModal } from "../../initials/initials";
import PopupForm from "./PopupForm";

function Popup() {
  const ComponentIcon = initialModal.icon;

  const closePopup = () => window.popup.close();

  const handleClose = (e) => {
    if (e.target.classList.contains('popup')) {
      closePopup();
    }
  }

  return (
    <dialog className="popup" id="popup" onClick={handleClose}>
      <div className="popup__container container">
        <button className="popup__close" type="button" onClick={closePopup}>
          <ComponentIcon className="popup__icon" />
        </button>
        <PopupForm />
        <div className="popup__image"/>
      </div>
    </dialog>
  )
}

export default Popup;
