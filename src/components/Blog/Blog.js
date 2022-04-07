import styles from './Blog.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className='container'>
        <div className={styles.header}>
          <div>
            <span>BLOG</span>
            <h2>Read Our Latest News</h2>
            <p>
              Voluptatum quam illum odit tempore laborum maiores eum, ab,
              deleniti itaque veritatis libero ipsam eius totam aut provident
              officiis molestiae ad ducimus?
            </p>
          </div>
          <a href='#'>
            View All{' '}
            <span className={styles.iconWrapper}>
              <ArrowRightAltIcon />
            </span>
            <span className={styles.styling} />
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.contentMobile}>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/1.jpg' />
                </span>
              </span>
              <div>
                <a href='#'>
                  Black Women Rising: It's Time to Support Our Fastest Growing
                  Group of Entrepreneurs
                </a>
                <div>21 Mar 2022 &bull; 3 minutes read</div>
              </div>
            </div>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/2.jpg' />
                </span>
              </span>
              <div>
                <a href='#'>
                  An update on how we keep members safe on LinkedIn
                </a>
                <div>18 Mar 2022 &bull; 8 minutes read</div>
              </div>
            </div>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/3.jpg' />
                </span>
              </span>
              <div>
                <a href='#'>Transparency Report: First Half of 2021</a>
                <div>31 Jan 2022 &bull; 8 minutes read</div>
              </div>
            </div>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/4.jpg' />
                </span>
              </span>
              <div>
                <a href='#'>
                  Creating a simpler, yet richer way, to access LinkedIn
                </a>
                <div>26 Jn 2022 &bull; 8 minutes read</div>
              </div>
            </div>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/5.jpeg' />
                </span>
              </span>
              <div>
                <a href='#'>Redefining What it Means to Be Professional</a>
                <div>21 Dec 2021 &bull; 8 minutes read</div>
              </div>
            </div>
          </div>
          <div className={styles.contentDesktop}>
            <div>
              <span>
                <span className={styles.imgWrapper}>
                  <img alt='mobile phone' src='/images/blog/1.jpg' />
                </span>
              </span>
              <div>
                <div>21 Mar 2022 &bull; 8 minutes read</div>
                <a>
                  Black Women Rising: It's Time to Support Our Fastest Growing
                  Group of Entrepreneurs
                </a>
                <p>
                  Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                  augue ac venenatis condimentum, sem libero volutpat nibh, nec
                  pellentesque velit pede quis nunc.
                </p>
              </div>
              <div className={styles.shadow} />
            </div>
            <div className={styles.right}>
              <div>
                <span>
                  <span className={styles.imgWrapper}>
                    <img alt='mobile phone' src='/images/blog/2.jpg' />
                  </span>
                </span>
                <div>
                  <div>18 Mar 2022 &bull; 8 minutes read</div>
                  <a href='#'>
                    An update on how we keep members safe on LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <span>
                  <span className={styles.imgWrapper}>
                    <img alt='mobile phone' src='/images/blog/3.jpg' />
                  </span>
                </span>
                <div>
                  <div>31 Jan 2022 &bull; 8 minutes read</div>
                  <a href='#'>Transparency Report: First Half of 2021</a>
                </div>
              </div>
              <div>
                <span>
                  <span className={styles.imgWrapper}>
                    <img alt='mobile phone' src='/images/blog/4.jpg' />
                  </span>
                </span>
                <div>
                  <div>26 Jan 2022 &bull; 8 minutes read</div>
                  <a href='#'>
                    Creating a simpler, yet richer way, to access LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <span>
                  <span className={styles.imgWrapper}>
                    <img alt='mobile phone' src='/images/blog/5.jpeg' />
                  </span>
                </span>
                <div>
                  <div>21 Dec 2021 &bull; 8 minutes read</div>
                  <a href='#'>Redefining What it Means to Be Professional</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.viewAll}>
          <a href='#'>
            View All
            <span className={styles.iconWrapper}>
              <ArrowRightAltIcon />
            </span>
            <span className={styles.styling} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
