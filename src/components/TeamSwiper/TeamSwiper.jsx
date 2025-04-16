import React, { useEffect } from "react";
import classNames from "classnames";

import { AnimatedCounter } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from "../../assets";
import css from "./TeamSwiper.module.css";

const TeamSwiper = (props) => {
  const { setMember, setSelectedMember } = props;

  useEffect(() => {
    setMember(teamMembers[0]);
  }, []);

  return (
    <div className="w-full slider-ud">
      <Swiper
        spaceBetween={6}
        slidesPerView={"auto"}
        navigation={window.screen.width > 576 ? true : false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="swiperjs-slider-ud"
      >
        {teamMembers?.map((member) => {
          return (
            <SwiperSlide
              key={member.image}
              onMouseEnter={() => setMember(member)}
              onClick={() => setSelectedMember(member)}
              className="overflow-hidden cursor-pointer rounded-xl"
            >
              <div
                style={{ "--background-image": `url(${member.image})` }}
                className={classNames(
                  css.slide,
                  `h-[560px] w-full overflow-hidden rounded-xl before:hover:scale-125 xs:h-[600px] sm:h-[480px] lg:h-[360px]`
                )}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-end px-1.5 py-3"></div>

                  <div className="px-2">
                    <div className="px-1 mb-3 text-white">
                      <h3 className="w-[80%] truncate text-secondary">
                        {typeof member.experience === "number" ? (
                          <span>
                            <strong className="text-3xl">
                              <AnimatedCounter
                                from={0}
                                to={member.experience}
                                once={true}
                                animationOptions={{
                                  duration: 2,
                                }}
                              />
                              +
                            </strong>{" "}
                            year of experience
                          </span>
                        ) : (
                          <span>{member.experience}</span>
                        )}
                      </h3>
                      <h3 className="w-[80%] truncate text-sm text-secondary">
                        {member.designation}
                      </h3>
                      <h3 className="w-[80%] truncate text-xs text-slate-300/60">
                        {member.description}
                      </h3>
                      <h3 className="truncate text-[0.79rem] font-medium uppercase sm:text-lg">
                        {member.name}
                      </h3>
                    </div>
                    {/* <button className="flex items-center justify-center w-full py-2 mb-2 space-x-1 font-semibold bg-white rounded-md">
                      <span>
                        <i className="text-xl text-green-600 fa-brands fa-whatsapp"></i>
                      </span>
                      <span>Chat</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
