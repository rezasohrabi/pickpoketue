import { ReactElement } from 'react';
import { TextInput, TextArea } from 'components';

interface AddQuestionFormProps {
  onTextChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onTextAreaChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}
export default function AddQuestionForm({
  onTextChange,
  onTextAreaChange,
}: AddQuestionFormProps): ReactElement {
  return (
    <>
      <TextInput label='موضوع' onChange={(e) => onTextChange(e)} />
      <TextArea label='متن سوال' onChange={(e) => onTextAreaChange(e)} />
    </>
  );
}
