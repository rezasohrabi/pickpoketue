import { Button, TextArea } from 'components';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../styles';

const AddAnswerButton = styled(Button)`
  padding: 8px 71px;
  margin: 40px 0;
`;

export default function AddAnswerForm(): ReactElement {
  return (
    <>
      <SectionHeader>پاسخ خود را ثبت کنید</SectionHeader>
      <TextArea label='پاسخ خود را بنویسید' placeholder='متن پاسخ ...' />
      <AddAnswerButton>ارسال پاسخ</AddAnswerButton>
    </>
  );
}
