import { useState } from "react";

function AnswerCard({faq, icon}) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => setIsActive(!isActive);

  const activeClassIcon = isActive && 'answer__card-icon_active';
  const activeClassAnswer = isActive && 'answer__card-block_active';

  const ComponentIcon = icon;

  return (
    <li className="answer__card">
      <button className="answer__card-button" type="button" onClick={toggleAccordion}>
        <h4 className="answer__card-title">{faq.question}</h4>
        <ComponentIcon className={`answer__card-icon ${activeClassIcon}`} />
      </button>
      <div className={`answer__card-block ${activeClassAnswer}`}>
        <div className="answer-card-subblock">
          <p className="answer__card-answer">{faq.answer}</p>
        </div>
      </div>
    </li>
  )
}

export default AnswerCard;
