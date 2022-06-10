import { CloseIcon } from 'assets';
import { createPortal } from 'react-dom';
import { SvgIcon } from 'components';
import { CardBody } from '../Card';
import {
  ModalContainer,
  StyledModal,
  ModalHead,
  ModalFooter,
  ModalTitle,
  ModalCancelButton,
  ModalSubmitButton,
} from './styles';

interface ModalProps {
  title: string;
  isVisible: boolean;
  children: React.ReactNode;
  hide: () => void;
}

export default function Modal({
  isVisible,
  children,
  hide,
  title,
}: ModalProps) {
  if (!isVisible) return null;

  return createPortal(
    <ModalContainer onClick={hide}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <ModalHead>
          <ModalTitle>{title}</ModalTitle>
          <SvgIcon icon={CloseIcon} onClick={hide} />
        </ModalHead>
        <CardBody>{children}</CardBody>
        <ModalFooter>
          <ModalCancelButton variant='text' onClick={hide}>
            انصراف
          </ModalCancelButton>
          <ModalSubmitButton>ایجاد سوال</ModalSubmitButton>
        </ModalFooter>
      </StyledModal>
    </ModalContainer>,
    document.body
  );
}
