import React, { useRef } from 'react';
import styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from '@mui/icons-material/Star';
import REVIEWS from './Testimonials.data';

const Testimonials = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section className={styles.testimonials}>
      <div className='container'>
        <div className={styles.top}>
          <div>
            <h2>What Our Customer Say</h2>
            <Swiper
              navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current,
              }}
              loop={true}
              modules={[Navigation, EffectFade]}
              className={styles.swiperContainer}
              slidesPerView={'auto'}
              autoHeight={true}
            >
              {REVIEWS.map((item, index) => {
                switch (item.stars) {
                  case 1:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                  case 2:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                  case 3:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                  case 4:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                  case 5:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                  default:
                    return (
                      <SwiperSlide className={styles.swiperSlide} key={index}>
                        <div>
                          <span className={styles.stars}>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                            <span>
                              <span className={styles.starWrapper}>
                                <StarIcon />
                              </span>
                            </span>
                          </span>
                          <p>{item.text}</p>
                          <h6>{item.name}</h6>
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    );
                }
              })}
            </Swiper>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.swiperNavPrev} ref={swiperNavPrevRef}>
            <button>
              <ArrowRightAltIcon />
            </button>
          </div>
          <div className={styles.swiperNavNext} ref={swiperNavNextRef}>
            <button>
              <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
