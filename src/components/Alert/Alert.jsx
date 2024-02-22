import { initialAlerts } from "../../initials/initials";
import AlertCard from "./AlertCard";

function Alert() {
  return (
    <section className="alert">
      <div className="container">
        <ul className="alert__cards">
          {initialAlerts.map((card, id) =>
            <AlertCard key={id} card={card} />
          )}
        </ul>
      </div>
    </section>
  )
}

export default Alert;
