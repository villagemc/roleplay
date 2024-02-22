import { initialPrice } from "../../initials/initials";

function Price() {
  const ComponentIcon = initialPrice.icon;

  const openPopup = () => window.popup.showModal();

  return (
    <section className="price">
      <div className="price__container container">
        <div className="price__block">
          <h2 className="price__title">{initialPrice.title}</h2>
          <button className="price__button" type="button" onClick={openPopup}>
            <span className="price__span">{initialPrice.name}</span>
            <ComponentIcon className="price__icon" />
          </button>
        </div>
        <video
          className="price__video"
          autoPlay
          type="video/mp4"
          src={initialPrice.video}
        >{initialPrice.error}
        </video>
      </div>
    </section>
  )
}

export default Price;
