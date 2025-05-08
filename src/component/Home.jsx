import React, { useState } from "react";
import ImgUpload from "./ImgUpload";
import ImgPreview from "./ImgPreview";
import {enhancedImageApi} from "../api/enhancedImageApi.js"
const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler =async (file) => {
    const imgUrl = URL.createObjectURL(file);

    setUploadedImage(imgUrl);
    setLoading(true);

    //call the api to enhance image
      try {
         const enhancedImageURL= await enhancedImageApi(file);
         setEnhancedImage(enhancedImageURL);
         setLoading(false)

      } catch (error) {
        console.error("Error enhancing image:", error);
        
        
      }
  };
  return (
    <div className="w-full  colCenter">
      <ImgUpload UploadImageHandler={UploadImageHandler} />
      {enhancedImage && !loading && (
        <div className="flex justify-center p-4">
          <a
            href={enhancedImage}
            download="enhanced-image.png"
            className="btn secondary "
          >
            Download Enhanced Image
          </a>
        </div>
      )}
      {uploadedImage && (
        <ImgPreview
          loading={loading}
          uploadedImage={uploadedImage}
          enhancedImage={enhancedImage}
        />
      )}
    </div>
  );
};

export default Home;
