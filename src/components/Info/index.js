import React from "react";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id="about-us-block" className="container-white">
      <div
        ref={ref}
        className={`container ${
          inView ? "animation-bottom-end" : "animation-bottom-start"
        }`}
      >
        <div className="about-us-block__row-first">
          <div className="about-us-block-item-left">
            <h2 className="h2">Безопасность и контроль</h2>
            <div className="problem__content">
              <p>
                Каждый из нас хочет жить в уютном, безопасном и комфортном
                месте. Однако, шумные компании под окном поздним вечером,
                тревога за ребенка, играющего в одиночку на детской площадке,
                подозрительные личности, шмыгающие в ваш подъезд или царапина на
                вашем автомобиле, оставленном на придомовой парковке — это лишь
                часть того, что омрачает ежедневный быт каждого жильца
                многоквартирного дома.{" "}
                <br/>
                <br/>
                <p className="hidden">
                  Установка системы видеонаблюдения поможет вам избавиться от
                  этих проблем раз и навсегда! Количество жилых домов,
                  оборудованных видеонаблюдением растёт с каждым годом и в
                  маленьких городах и в мировых столицах. Ее эффективность в
                  обеспечении безопасности и повышении уровня комфорта жителей
                  доказано на практике.{" "}
                <br/>
                <br/>
                </p>
                <p className="hidden">
                  Очевидно, что само наличие системы видеонаблюдения на вашем
                  доме способно существенно снизить криминогенную обстановку, а
                  также служит дополнительным «тормозом» для аморального
                  поведения отдельных граждан.
                </p>
              </p>
            </div>
          </div>
          <div className="about-us-block-item-left">
            <div className="problem__content image-container">
              <div className="image-item">
                <figure>
                <div className="black-div"></div>
                  <img src="/img/1c3373a91a9c80150863c34c4ed2dba6.jpg" alt="" />
                  <figcaption>Продажа наркотиков</figcaption>
                </figure>
              </div>
              <div className="image-item">
                <figure>
                  <img src="/img/5_main-v1584378372.jpg" alt="" />
                  <figcaption>Квартирные кражи</figcaption>
                </figure>
              </div>
              <div className="image-item">
                <figure>
                  <img src="/img/3142602.jpg" alt="" />
                  <figcaption>Автомобильные происшествия</figcaption>
                </figure>
              </div>
              <div className="image-item">
                <figure>
                  <img src="/img/scale_1200.jpg" alt="" />
                  <figcaption>Употребление алкоголя</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
