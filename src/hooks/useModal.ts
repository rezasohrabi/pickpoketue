import { useState } from 'react';

interface IUseModal {
  isVisible: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

const useModal = (): IUseModal => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible(!isVisible);

  return { isVisible, toggle, show, hide };
};

export default useModal;
