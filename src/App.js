import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import LoadSpinner from './components/LoadSpinner/LoadSpinner';
import { useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  // timer for spinner
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <div>
      {isLoading && <LoadSpinner />}
      {!isLoading && (
        <>
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}
