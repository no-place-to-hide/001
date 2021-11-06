import { Link } from "react-router-dom";
import './Form_02.css';

export const Form_02 = () => {
  return (
    <div className="Form_02">
      <div className="Form_02-img-container">
        <img className="Form_02-img" src="./003.png" alt="" />
      </div>
      <div className="Form_02-center-text">
        <div className="Form_02-center-text-item">
          Yuchanbe shsh’chmchfpsie?
        </div>
      </div>
      <Link to="/001/form-3">
        <div className="Form_02-answers">
          <div className="Form_02-answers-item">
            Da
          </div>
          <div className="Form_02-answers-item">
            Net
          </div>
          <div className="Form_02-answers-item">
            Chto?
          </div>
        </div>
      </Link>
    </div>
  );
};
