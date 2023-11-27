import { useInView } from "react-intersection-observer";

const Heading = () => {
  const { ref, inView } = useInView({
    // threshold: 0,
    // triggerOnce: true,
  });

  return (
    <div id="heading" className="container-white">
      <div
        ref={ref}
        className={`container`}
      >
        <h1 className="h1" style={{ fontSize: "30px"}}>Видеопериметр <span style={{fontWeight: "400"}}>—</span></h1>
        <h2 className="h3 text-slogan" align="center" style={{fontWeight: "400"}}>
          Это дружная команда профессионалов, имеющая за плечами годы
          эффективной работы в сфере предоставления ЖКУ. <span className="hidden">Главный предмет
          гордости для нас - тысячи довольных клиентов. Мы сделаем максимум, что
          бы вы стали одним из них!</span>
        </h2>
      </div>
    </div>
  );
};

export default Heading;
