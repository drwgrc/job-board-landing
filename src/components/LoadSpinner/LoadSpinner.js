import styles from './LoadSpinner.module.scss';

const LoadSpinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container} />
    </div>
  );
};

export default LoadSpinner;
