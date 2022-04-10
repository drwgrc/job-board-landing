import styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import StarIcon from '@mui/icons-material/Star';
import REVIEWS from './Testimonials.data';
import cls from 'classnames';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className='container'>
        <div className={styles.top}>
          <div>
            <h2>What Our Customers Say</h2>
            <Swiper
              navigation={{
                prevEl: `.swiperNavPrev`,
                nextEl: `.swiperNavNext`,
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
          <div className={cls('swiperNavPrev', styles.swiperNavPrev)}>
            <button>
              <ArrowRightAltRoundedIcon />
            </button>
          </div>
          <div className={cls('swiperNavNext', styles.swiperNavNext)}>
            <button>
              <ArrowRightAltRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
