import Popup_image from "../../assets/popup.png";
import './Popup.css'; 

// eslint-disable-next-line react/prop-types
const Popup = ({handleClose }) => {

  const handleClickOutside = (event) => {
    if (event.target.className === 'popup-box') {
      handleClose();
    }
  };

  return (
    <div className='popup-image'  onClick={handleClickOutside}>
        <span className="close-icon" onClick={handleClose}> <img className="image" src={Popup_image}/></span>
    </div>
  );
}

export default Popup;

