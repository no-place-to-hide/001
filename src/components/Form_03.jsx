import { Link } from "react-router-dom";
import './Form_03.css';

export const Form_03 = () => {
  return (
    <div className="Form_03">
      <div className="Form_03-img-container">
        <img className="Form_03-img" src="./004.png" alt="" />
      </div>
      <div className="Form_03-center-text">
        <div className="Form_03-center-text-item">
          Ya imety v vidu, ch shgsiio, ьuu cu’sh’b?
        </div>
      </div>
      <div className="Form_03-answers">
        <Link to="/001/form-4">
          <div className="Form_03-answers-item">
            Da
          </div>
        </Link>
        <Link to="/001">
          <div className="Form_03-answers-item">
            Net
          </div>
        </Link>
      </div>
    </div>
  );
};
