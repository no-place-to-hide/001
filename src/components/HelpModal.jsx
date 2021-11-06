import { CloseIcon } from './common/icons/CloseIcon';
import Draggable from 'react-draggable';
import './HelpModal.css';

export const HelpModal = ({ onClose }) => {
  return (
    <Draggable>
      <div className="HelpModal">
        <div className="HelpModal-header">
          <div>
            Help
          </div>
          <div onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        <div className="HelpModal-body">
          ??,,??????////////
        </div>
      </div>
    </Draggable>
  );
};