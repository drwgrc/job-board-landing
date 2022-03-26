import styles from './styles/App.module.scss';
import Home from './pages/Home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import LoadSpinner from './components/LoadSpinner/LoadSpinner';
import { useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  // timer for spinner
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className={styles.app}>
      {isLoading && <LoadSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}
