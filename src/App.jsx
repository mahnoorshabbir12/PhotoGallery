import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  const loadPhotos = () => {
    const newPhotos = Array.from(
      { length: 3 },
      () =>
        `https://picsum.photos/200/400?random=${Math.floor(
          Math.random() * 1000
        )}`
    );
    setPhotos(newPhotos);
  };
  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <>
      <h1
        style={{ fontFamily: "cursive" }}
        className="text-5xl text-black mb-8 text-center"
      >
        Photos Gallery
      </h1>

      <div
        style={{ backgroundColor: "#b2f7ef" }}
        className="flex flex-wrap gap-3 p-4 justify-center w-full transition-all duration-300 ease-in-out hover:shadow-lg"
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            className="w-64 h-96 object-cover rounded-xl shadow-md"
            src={photo}
            alt="Random Pictures"
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
          onClick={loadPhotos}
        >
          Load New Photos
        </button>
      </div>
    </>
  );
}

export default App;
