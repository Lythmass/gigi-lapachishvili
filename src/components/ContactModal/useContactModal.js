import { useAnimate } from 'framer-motion';

export const useContactModal = (setShowModal) => {
  const [scope, animate] = useAnimate();

  const handleClose = async () => {
    await animate(scope.current, { scale: 0 }, { duration: 0.125 });
    setShowModal(false);
  };

  return { scope, handleClose };
};

export default useContactModal;
