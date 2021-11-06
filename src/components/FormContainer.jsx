import './FormContainer.css';

export const FormContainer = ({ children, options }) => {
  return (
    <div className="FormContainer">
      <div className={options?.black ? 'FormContainer-body-black' : 'FormContainer-body'}>
        <div className="FormContainer-header" />
        <div className="FormContainer-navbar">
          <div className="FormContainer-navbar-item">
            File
          </div>
          <div className="FormContainer-navbar-item">
            Edit
          </div>
          <div className="FormContainer-navbar-item">
            View
          </div>
          <div className="FormContainer-navbar-item">
            Go
          </div>
          <div className="FormContainer-navbar-item">
            Bookmarks
          </div>
          <div className="FormContainer-navbar-item">
            Options
          </div>
          <div className="FormContainer-navbar-item">
            Windows
          </div>
          <div className="FormContainer-navbar-item FormContainer-navbar-item-help">
            Help
          </div>
        </div>
        <div className="FormContainer-children">
          {children}
        </div>
      </div>
    </div>
  );
};
