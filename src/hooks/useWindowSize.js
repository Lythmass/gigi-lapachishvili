import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth]);

  return size;
};

export default useWindowSize;
