// Import Swiper React components
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const MySwiper = () => {

  return (
    <Swiper
      id="swiper"
      modules={[EffectFade, Autoplay, Thumbs, Pagination, Navigation]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      className="fade"
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
      <SwiperSlide>
        <h2 className="swiper-heading h2">
          Видеонаблюдение, которое никогда не проспит
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 className="swiper-heading h2">Мы не пропускаем ни одной детали</h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 className="swiper-heading h2">Безопасность в каждом кадре</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
