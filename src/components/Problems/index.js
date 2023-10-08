import { useInView } from "react-intersection-observer";
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const problems = [
  {
    img: "/img/konsaltingsvg.svg",
    name: `Консультация`,
    desc: `Подберем спецификации, определим места установки системы
    видеонаблюдения, составим проект`,
  },
  {
    img: "/img/install.svg",
    name: "Установка",
    desc: "Проведем монтаж систем видеонаблюдения с настройкой элементов",
  },
  {
    img: "/img/oborud.svg",
    name: "Подбор оборудования",
    desc: "Порекомендуем камеры, регистраторы, монтажные материалы",
  },
  {
    img: "/img/service.svg",
    name: "Сервис",
    desc: `
    Гарантируем техническое и сервисное обслуживание систем
    видеонаблюдения`,
  },
  {
    img: "/img/like.svg",
    name: "Качество",
    desc: `Мы предлагаем только высококлассное оборудование и
    профессиональную установку для непрерывного функционирования
    системы видеонаблюдения`,
  },
  {
    img: "/img/like.svg",
    name: "Персонализация",
    desc: `Мы создаем и устанавливаем индивидуальные системы видеонаблюдения,
    которые соответствуют вашим уникальным потребностям и целям.`,
  },
];

const Problems = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id="problem-block" className="container-black">
      <div
        ref={ref}
        className={`container ${
          inView ? "animation-bottom-end" : "animation-bottom-start"
        }`}
      >
        <h2 className="h2">Наши услуги</h2>
        <div className="problem">
          {problems.map((item) => (
            <div className="problem__item container-white">
              <div className="problem__img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="problem__title">{item.name}</div>
              <div className="problem__content">{item.desc}</div>
            </div>
          ))}
        </div>
        <Swiper
          id="swiper2"
          modules={[EffectFade, Autoplay, Thumbs, Pagination, Navigation]}
          effect="cards"
          spaceBetween={0}
          slidesPerView={1}
          className="cards"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          speed={500}
        >
          {problems.map((item) => (
            <SwiperSlide>
              <div className="problem__item container-white">
                <div className="problem__img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <div className="problem__title">{item.name}</div>
                <div className="problem__content">{item.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Problems;
