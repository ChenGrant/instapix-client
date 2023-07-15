import React, { useContext, useState } from "react";
import { getPhotos, uploadPhotos } from "../utils/requests";
import { UserContext } from "../context/UserContext";

const Photos = () => {
  const user = useContext(UserContext);
  const [fetchedImages, setFetchedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isGettingPhotos, setIsGettingPhotos] = useState(false);

  const handleImageChange = (e) => {
    const newImages = [...e.target.files];
    setImages(newImages);
  };

  return (
    <>
      <h3>Photos</h3>
      <div>
        {isUploading ? (
          <div>Uploading</div>
        ) : (
          <>
            <input type="file" multiple onChange={handleImageChange} />
            <button
              onClick={async () => {
                setIsUploading(true);
                await uploadPhotos(user, images);
                setIsUploading(false);
              }}
            >
              Upload Images
            </button>
          </>
        )}
      </div>
      <div>
        {isGettingPhotos ? (
          <div>Getting Photos</div>
        ) : (
          <button
            onClick={async () => {
              setIsGettingPhotos(true);
              setFetchedImages(await getPhotos(user));
              setIsGettingPhotos(false);
            }}
          >
            Get Images
          </button>
        )}
        <ul>
          {fetchedImages.map((image) => (
            <li key={image.id}>
              <img src={image.src} height="300" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Photos;
