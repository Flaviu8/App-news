import Title from "../title/Title";
import './Video.style';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Preview from "../preview/Preview";

const SwiperVideo = () => {
  return (
    <div>
      <Title title={"Video"} />
      <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Preview title="Help" desc="The Beatles" img="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2019/12/SAARA-DESERTO.jpg"/></SwiperSlide>
      <SwiperSlide><Preview title="Help" desc="The Beatles" img="https://s4.static.brasilescola.uol.com.br/be/2022/10/deserto-saara.jpg"/></SwiperSlide>
      <SwiperSlide><Preview title="Help" desc="The Beatles" img="https://www.remessaonline.com.br/blog/wp-content/uploads/2022/06/maiores-desertos-do-mundo-1170x780.jpg.optimal.jpg"/></SwiperSlide>
      {/* <SwiperSlide>{<Preview title="Help" desc="The Beatles" url="https://www.youtube.com/embed/2Q_ZzBGPdqE"/>}</SwiperSlide>
      <SwiperSlide>{<Preview title="Never Gonna Give You Up" desc="Rick Astley" url="https://www.youtube.com/embed/dQw4w9WgXcQ"/>}</SwiperSlide>
      <SwiperSlide>{<Preview title="We Are The Champions" desc="Queen" url="https://www.youtube.com/embed/04854XqcfCY"/>}</SwiperSlide> */}
    </Swiper>
    </div>
  );
};

export default SwiperVideo;

