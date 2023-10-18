import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const Map = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });



  return (
    <div
      id="map"
      ref={ref}
      className={`map ${
        inView ? "animation-bottom-end" : "animation-bottom-start"
      }`}
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A697b5e22797e1164d1b5e9dc2fb27c86fde127d1b4560936d367cf22bd133f1f&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Map;
