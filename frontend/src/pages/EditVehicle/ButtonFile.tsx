import React, { useState } from 'react'

const ButtonFile = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileName(event.target.files[0].name); 
    }
  };

  return (
    <div>

      <input
        type="file"
        id="file-upload"
        className="hidden" 
        onChange={handleFileChange}
      />
      
      <label
        htmlFor="file-upload"
        className="bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-400"
      >
        {fileName ? `File Selected: ${fileName}` : "Select File"}
      </label>
    </div>
  );
}

export default ButtonFile