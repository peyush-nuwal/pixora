import React from "react";

const ImgUpload = ({ UploadImageHandler }) => {
  const showImageHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      UploadImageHandler(file);
    }
    console.log();
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition duration-200  "
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <span className=" font-medium text-gray-600">
          Click or Drag to Upload your Image
        </span>
      </label>
    </div>
  );
};

export default ImgUpload;
