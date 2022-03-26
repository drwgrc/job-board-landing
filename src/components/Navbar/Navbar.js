import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__link}>
          <a href='#'>Home</a>
        </li>
        <li className={styles.navbar__link}>
          <a href='#'>Jobs</a>
        </li>
        <li className={styles.navbar__link}>
          <a href='#'>Candidates</a>
        </li>
        <li className={styles.navbar__link}>
          <a href='#'>Employers</a>
        </li>
        <li className={styles.navbar__link}>
          <a href='#'>Blog</a>
        </li>
        <li className={styles.navbar__link}>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
