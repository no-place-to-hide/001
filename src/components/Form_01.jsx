import './Form_01.css';

export const Form_01 = () => {
  return (
    <div className="Form_01">
      <div className="Form_01-img-container">
        <img className="Form_01-img" src="./001.png" alt="" />
      </div>
      <div className="Form_01-center-text">
        <div className="Form_01-center-text-item">
          Pogoda snaruzhi horoshaya.
        </div>
      </div>
      <div className="Form_01-answers">
        <div className="Form_01-answers-item">
          Da
        </div>
        <div className="Form_01-answers-item">
          Net
        </div>
        <div className="Form_01-answers-item">
          Ne znayu
        </div>
      </div>
    </div>
  );
};
