import { useAnimate } from 'framer-motion';
import { useWindowSize } from 'hooks';
import { useEffect } from 'react';

export const useHome = (props) => {
  const [scope, animate] = useAnimate();
  const size = useWindowSize();

  useEffect(() => {
    if (props.openNavBar) {
      animate(scope.current, { opacity: 0 }, { duration: 0 });
    } else {
      if (size >= 768) {
        animate(scope.current, { opacity: 0 }, { duration: 0 });
      } else {
        animate(scope.current, { opacity: 1 }, { duration: 0 });
      }
    }
  }, [props.openNavBar, size]);

  return scope;
};

export default useHome;
