import styled from 'styled-components';
import { Button } from '../Button';
import { Card, CardHeader } from '../Card';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.38);
`;
export const StyledModal = styled(Card)`
  position: relative;
  width: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHead = styled(CardHeader)`
  font-weight: 800;
  font-size: 16px;
  padding: 0 24px;
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
  color: #222222;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px 24px;
`;

export const ModalSubmitButton = styled(Button)`
  padding: 8px 20px;
`;

export const ModalCancelButton = styled(Button)`
  padding: 8px 32px !important;
  margin-left: 16px;
  &:hover {
    background-color: #ffffff;
  }
`;
