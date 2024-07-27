import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, hintText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black rounded-lg shadow-lg w-[200px]">
        <div className="flex justify-end p-2">
          <button
            className="text-red-700 hover:text-gray-800"
            onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl mb-4 underline decoration-dotted">Hint</h2>
          <p className="text-sm"> {hintText}
            The first cryptocurrency that ever existed. Widely regarded as the
            father of all cryptocurrencies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
