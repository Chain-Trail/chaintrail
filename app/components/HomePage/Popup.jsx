import { FaTelegram } from "react-icons/fa";
import { MdNoEncryption } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-950 rounded-lg shadow-xl w-80">
        <div className="p-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 my-2 p-1 hover:text-gray-700">
            <GrClose/>
            </button>
          </div>

          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <p className="text-gray-700">Connect MetaMask</p>
              <MdNoEncryption className="text-3xl" />
            </a>
            <div className="border-t border-gray-200"></div>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <p className="text-gray-700">Connect Wallet</p>
              <CiWallet className="text-3xl" />
            </a>
            <div className="border-t border-gray-200"></div>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <p className="text-gray-700">Play on Telegram</p>
              <FaTelegram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
