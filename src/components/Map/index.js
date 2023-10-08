import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const Map = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     event.preventDefault();
  //   };

  //   const mapElement = document.querySelector('#map');
  //   mapElement.addEventListener('wheel', handleScroll, { passive: false });

  //   return () => {
  //     mapElement.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  return (
    <div
      id="map"
      ref={ref}
      className={`map ${
        inView ? "animation-bottom-end" : "animation-bottom-start"
      }`}
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A75f6c8c181c520694d8847ca70d68907666d64ff8e00c460f004b6204fb6da58&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Map;
