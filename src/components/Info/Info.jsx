import InfoText from "./InfoText";

function Info({info, infoID}) {
  return (
    <section className="info" id={infoID}>
      <div className="info__container container">
        <div className="info__block">
          <h2 className="info__title">{info.title}</h2>
          <ul className="info__subtitles">
            {info.subtitles.map((subtitle, id) =>
              <InfoText key={id} subtitle={subtitle} />
            )}
          </ul>
        </div>
        <img
          className="info__image"
          src={info.art.src}
          alt={info.art.alt}
        />
      </div>
    </section>
  )
}

export default Info;
