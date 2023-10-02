import NewCard from "./NewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = (props) => {
  const { filteredOptions } = props;

  const gatherContent = () => {
    return filteredOptions.map((option, i) => (
      <SwiperSlide key={i}>
        <NewCard option={option} i={i} />
      </SwiperSlide>
    ));
  };

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {gatherContent()}
      </Swiper>
    </>
  );
};

export default Carousel;
