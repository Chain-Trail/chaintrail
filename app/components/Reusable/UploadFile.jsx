import { useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";

const UploadFile = ({ image, setImage }) => {
  const fileInputRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => fileInputRef.current.click()}>
        <FiPaperclip className="text-2xl" />
        <span>Attach File</span>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {thumbnail && (
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-8 h-8 object-cover border rounded"
        />
      )}
    </div>
  );
};

export default UploadFile;
