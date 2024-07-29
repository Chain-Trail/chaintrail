import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

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
              <GrClose />
            </button>
          </div>

          <div className="space-y-8 py-4">
            <Link
              href="#connectWallet"
              className="flex items-center justify-between p-2 hover:bg-slate-900 rounded">
              <p>Connect Wallet</p>
              <Image src="metamask.svg" width={30} height={30} alt="metamask" />
            </Link>
            <Link
              href="https://t.me/ChainTrailBot"
              className="flex items-center justify-between p-2 hover:bg-slate-900 rounded">
              <p>Play on Telegram</p>
              <Image src="telegram.svg" width={30} height={30} alt="metamask" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
