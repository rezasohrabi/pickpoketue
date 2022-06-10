import { CloseIcon } from 'assets';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  title: string;
  isVisible: boolean;
  children: React.ReactNode;
  hide: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.38);
`;
const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  top: 50%;
  border-radius: 8px;
  background-color: #f9f9f9;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%),
    0px 0px 1px rgb(12 26 75 / 24%);
  line-height: 24px;
  font-size: 12px;
`;

const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  padding: 0 24px;
  background: #ffffff;
  opacity: 0.7;
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05),
    0px 0px 1px rgba(12, 26, 75, 0.24);
  border-radius: 8px;
`;
const CloseButton = styled.img`
  cursor: pointer;
`;

const ModalTitle = styled.h3`
  font-size: 16px;
  color: #222222;
`;

const TextInput = styled.label`
  padding: 18px 20px 10px;
  font-size: 12px;
  line-height: 24px;
  & input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    outline: none;
    margin-top: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 12px 16px;
    font-weight: 400;
  }
`;

const TextArea = styled.label`
  padding: 18px 20px 10px;
  font-size: 12px;
  line-height: 24px;
  & textarea {
    width: 100%;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    outline: none;
    margin-top: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 12px 16px;
    font-weight: 400;
    min-height: 164px;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px 24px;
`;

export const ModalSubmitButton = styled.button`
  color: #ffffff;
  border-radius: 6px;
  background-color: #199da3;
  border: 1px solid #199da3;
  padding: 8px 20px;
  text-decoration: none;
  line-height: 20px;
  cursor: pointer;
`;

export const ModalCancelButton = styled.button`
  background-color: transparent;
  border-radius: 6px;
  color: #199da3;
  border: none;
  padding: 8px 32px;
  text-decoration: none;
  line-height: 20px;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`;

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
          <CloseButton src={CloseIcon} onClick={hide} />
        </ModalHead>
        {/* {children} */}
        <TextInput>
          موضوع
          <input type='text' />
        </TextInput>
        <TextArea>
          متن سوال
          <textarea></textarea>
        </TextArea>
        <ModalFooter>
          <ModalCancelButton>انصراف</ModalCancelButton>
          <ModalSubmitButton>ایجاد سوال</ModalSubmitButton>
        </ModalFooter>
      </StyledModal>
    </ModalContainer>,
    document.body
  );
}
