import { useEffect } from 'react';
import { setOnMobile, useUIController } from '../context/context';

const useCheckScreenSize = () => {
  const [, dispatch] = useUIController();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setOnMobile(dispatch, false);
      } else {
        setOnMobile(dispatch, true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
};

export default useCheckScreenSize;
