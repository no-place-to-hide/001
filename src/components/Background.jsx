import React from 'react';

import './Background.css';

export const Background = () => {
  return (
    <div className="Background">
      <h1>
        Archive Search Results
      </h1>
      <p>
        Results from Exact search to dddskdsksk.com
      </p>
      <p>
        File mine.exe
      </p>
      <div className="Background-radio">
        <div>
          <input type="radio" name="Size: 111993999 bytes" />
          Size: 111993999 bytes
        </div>
        <div>
          <input type="radio" />
          Last changed 1996 Feb 22
        </div>
        <div>
          <input type="radio" name="Size: 111993999 bytes" />
          Location:
        </div>
      </div>
    </div>
  );
};
