import { initialDiscord, initialFaqs, initialForFaq } from "../../initials/initials";
import AnswerCard from "./AnswerCard";
import AnswerDiscord from "./AnswerDiscord";

function Answer() {
  return (
    <section className="answer">
      <div className="answer__container container">
        <h2 className="answer__title">{initialForFaq.title}</h2>
        <div className="answer__info">
          <ul className="answer__cards">
            {initialFaqs.map((faq, id) =>
              <AnswerCard
                key={id}
                faq={faq}
                icon={initialForFaq.icon}
              />
            )}
          </ul>
          <AnswerDiscord discord={initialDiscord} />
        </div>
      </div>
    </section>
  )
}

export default Answer;
