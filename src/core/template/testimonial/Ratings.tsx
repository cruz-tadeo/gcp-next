"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { destinations4 } from "../../../repository/DestinationsInMemoryRepo";

const Travellers = () => {
  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".dtl-next-active",
          prevEl: ".dtl-prev-active",
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },

        }}
      >
        {destinations4.map((item) => (
          <SwiperSlide key={item.id} className="mt-40 mb-200">
            <div className="card bg-light p-4 shadow-lg">
              <h2 className="text-16 text-exotic fw-light">Hotel Dorado Royale</h2>
              <p className="py-24  text-exotic-text text-15 fw-light">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo."
              </p>
              <div className="text-16 text-exotic fw-light">Sara Larios</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none dtl-prev-active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none dtl-next-active">
        <i className="icon icon-chevron-right text-12" />
      </button>
    </>
  );
};

export default Travellers;
