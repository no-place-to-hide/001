import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Form_04.css';

const CREDENTIALS_URL = 'http://82.146.63.45/api/new_user';

export const Form_04 = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(CREDENTIALS_URL);
      const response    = await rawResponse.json();
      setCredentials(response);
    })();
  }, []);

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
            {credentials.username || 'default_username'}
          </div>
          <div className="Form_04-answers-item">
            {credentials.password || 'default_password'}
          </div>
        </div>
      </Link>
    </div>
  );
};
