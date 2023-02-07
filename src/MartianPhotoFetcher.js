import React, { useEffect, useState } from 'react';

function MartianPhotoFetcher() {
  const [imgSrc, setImgSrc] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setImgSrc(data.photos[0].img_src);
        setData(data.photos);
      });
  }, []);

  console.log(`The image src is ${imgSrc}`);
  return (
    <>
      <img src={imgSrc} alt='pic' />
      {data.map((photo, index) => (
        <img key={index} src={photo.img_src} alt='hey' />
      ))}
    </>
  );
}

export default MartianPhotoFetcher;
