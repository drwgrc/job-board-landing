import styles from './Testimonials.module.scss';
import candidateImg from './../../assets/images/featured-job-img.jpg';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <h3 className={styles.testimonials__header}>
          Some <span className={styles.testimonials__headerColor}>Words</span>{' '}
          From Our <br /> SATISFIED{' '}
          <span className={styles.testimonials__headerColor}>CLIENTS</span>
        </h3>
        <div className={styles.testimonials__clientContainer}>
          <div className={styles.testimonials__clientImgWrapper}>
            <img
              src={candidateImg}
              className={styles.testimonials__clientImg}
            />
          </div>
          <div className={styles.testimonials__clientReviewContainer}>
            <div className={styles.testimonials__clientBtns}>
              <div className={styles.testimonials__prevBtnWrapper}>P</div>
              <div className={styles.testimonials__nextBtnWrapper}>N</div>
            </div>

            <p className={styles.testimonials__text}>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, nobis. Iure repudiandae, accusantium odio ad repellat
              numquam mollitia voluptatibus distinctio, vitae impedit, et
              magnam. At rem cupiditate magni iusto illo."
            </p>
            <p className={styles.testimonials__name}>John Doe</p>
          </div>
          <div className={styles.testimonials__moreBtnWrapper}>
            <a className={styles.testimonials__moreBtn} href='#'>
              See More Recommendations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
