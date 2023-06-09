import { useWindowSize } from 'hooks';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const useNavBarConfig = (props) => {
  const size = useWindowSize();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (size < 768) {
      animate(scope.current, { x: '-100%' }, { duration: 0 });
    }
  }, [size]);

  useEffect(() => {
    if (props.openNavBar && size < 768) {
      animate(scope.current, { x: 0 }, { duration: 0.25 });
    }
  }, [props.openNavBar, size]);

  const handleClick = () => {
    if (size < 768) {
      animate(scope.current, { x: '-100%' }, { duration: 0.25 });
      props.setOpenNavBar(false);
    }
  };

  return { handleClick, size, scope };
};

export default useNavBarConfig;
