import Loader from "../component/Loader.jsx";
const ImgPreview = ({ uploadedImage, enhancedImage, loading }) => {
  return (
    <div className="mt-8  grid grid-cols-1 md:grid-cols-2 gap-6 w-full  max-w-7xl ">
      {/* ----Original Image---- */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        ) : (
          <div className="flexCenter h-80 bg-gray-200">No Image Selected </div>
        )}
      </div>

      {/* ----Enhanced Image---- */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        {enhancedImage && !loading && (
          <img
            src={enhancedImage}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        )}

        {loading ? (
          <Loader />
        ) : (
          <div className="flexCenter h-80 bg-gray-200">No enhanced image </div>
        )}
      </div>
    </div>
  );
};

export default ImgPreview;
