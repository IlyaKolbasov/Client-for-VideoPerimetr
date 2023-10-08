import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div id="experience" className="container-white">
      <div
        ref={ref}
        className={`container ${
          inView ? "animation-bottom-end" : "animation-bottom-start"
        }`}
      >
        <div className="about-us-info">
          <div className="about-us-info__item">
            <div className="about-us-info__title">5+</div>
            <div className="about-us-info__content">
            лет опыта в установке систем видеонаблюдения
            </div>
          </div>
          <div className="about-us-info__item">
            <div className="about-us-info__title">7000+</div>
            <div className="about-us-info__content">
            клиентов доверили нам свою безопасность
            </div>
          </div>
          <div className="about-us-info__item">
            <div className="about-us-info__title">430+</div>
            <div className="about-us-info__content">
            успешно завершённых проектов
            </div>
          </div>
          <div className="about-us-info__item">
            <div className="about-us-info__title">2800+</div>
            <div className="about-us-info__content">
            часов архивных видеоматериалов
            </div>
          </div>
          <div className="about-us-info__item">
            <div className="about-us-info__title">1300+</div>
            <div className="about-us-info__content">
            камер видеонаблюдения установлено
            </div>
          </div>
          <div className="about-us-info__item">
            <div className="about-us-info__title">10+</div>
            <div className="about-us-info__content">
              городов Беларуси сотрудничает с нами
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
