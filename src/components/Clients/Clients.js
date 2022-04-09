import React, { Component } from 'react';
import styles from './Clients.module.css';
import IMGURLS from './Clients.data';
import 'swiper/css/bundle';

const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className='container'>
        <div className={styles.text}>
          <h2>Our Clients</h2>
          <p>
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor.
          </p>
        </div>
        <div className={styles.grid}>
          {IMGURLS.map((url, index) => (
            <div className={styles.box} key={index}>
              <div>
                <span>
                  <span className={styles.logoWrapper}>
                    <img src={url} />
                  </span>
                </span>
              </div>
            </div>
          ))}
          {IMGURLS.map((url, index) => (
            <div className={styles.box} key={index}>
              <div>
                <span>
                  <span className={styles.logoWrapper}>
                    <img src={url} />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
