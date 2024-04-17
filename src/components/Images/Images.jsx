import { useEffect, useState } from "react";
import imageStyles from "./imageStyles.module.css";
import Loader from "../Loader/Loader";
const Images = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
      });
  }, []);
  const logo = images.slice(20, 40);
  if (!images.length) return <Loader />;
  return (
    <main>
      {images
        ? images.slice(0, 20).map((elem) => {
            const urlLogo = logo.find((imgItem) => imgItem.id === elem.id + 20);
            return (
              <div className={imageStyles.images} key={elem.id}>
                <div className={imageStyles.user}>
                  {urlLogo && (
                    <img
                      className={imageStyles.userPhoto}
                      src={`${urlLogo.url}`}
                      alt=""
                    />
                  )}
                  <h2>{elem.title.slice(0, 15)}</h2>
                </div>
                <img className={imageStyles.photo} src={elem.url} alt="" />
              </div>
            );
          })
        : ""}
    </main>
  );
};

export default Images;
