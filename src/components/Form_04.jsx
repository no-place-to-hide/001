import { Link } from "react-router-dom";
import './Form_04.css';

export const Form_04 = () => {
  return (
    <div className="Form_04">
      <div className="Form_04-center-text">
        <div className="Form_04-center-text-item">
          Otlichno. http://82.146.63.45/
        </div>
      </div>
      <Link to="/001/">
        <div className="Form_04-answers">
          <div className="Form_04-answers-item">
            username
          </div>
          <div className="Form_04-answers-item">
            QkD4Yxv
          </div>
        </div>
      </Link>
    </div>
  );
};
