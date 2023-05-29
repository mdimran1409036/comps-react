import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const element = (
    <>
      <div
        className="fixed inset-0  bg-gray-600 opacity-80  "
        onClick={() => onClose()}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </>
  );
  return createPortal(element, document.querySelector(".modal-container"));
};

export default Modal;
Modal.propTypes = {
  modal: PropTypes.any,
  onClose: PropTypes.func,
  children: PropTypes.any,
};
