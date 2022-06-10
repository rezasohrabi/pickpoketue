import { ReactElement } from 'react';
import { TextInput, TextArea } from 'components';

export default function AddQuestionForm(): ReactElement {
  return (
    <>
      <TextInput label='موضوع' />
      <TextArea label='متن سوال' />
    </>
  );
}
