import Home from "./component/Home"



function App() {
  

  return (
    <main className="colCenter min-h-screen h-full  bg-gray-100 py-8 px-4 ">
      <div className="mb-8 text-center ">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          {" "}
          Upscale image quality <br /> with AI free online
        </h1>
        <p className="text-lg text-gray-500 ">
          AI image upscaler will enhance your photo in seconds. Increase <br />
          image quality to 4K with our free online tool! Try it here
        </p>
      </div>

      <Home />
      <div className="text-lg text-gray-500  mt-5">
        Upload your image and let AI enhance it for you
      </div>
    </main>
  );
}

export default App
